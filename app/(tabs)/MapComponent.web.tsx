import React, { useEffect, useState } from 'react';

type Sensor = {
  sensor_id: number;
  latitude: number;
  longitude: number;
  name: string;
  pm2_5: number;
};

type Props = {
  sensors: Sensor[];
  loading: boolean;
};

export default function MapComponent({ sensors, loading }: Props) {
  const [leafletReady, setLeafletReady] = useState(false);
  const [leafletComponents, setLeafletComponents] = useState<any>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      Promise.all([
        import('leaflet'),
        import('react-leaflet'),
      ]).then(([L, leaflet]) => {
        // Fix marker icons
        delete (L.Icon.Default.prototype as any)._getIconUrl;
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: '/images/marker-icon-2x.png',
          iconUrl: '/images/marker-icon.png',
          shadowUrl: '/images/marker-shadow.png',
        });

        // Inject leaflet CSS
        const cssId = 'leaflet-css';
        if (!document.getElementById(cssId)) {
          const link = document.createElement('link');
          link.id = cssId;
          link.rel = 'stylesheet';
          link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
          document.head.appendChild(link);
        }

        setLeafletComponents(leaflet);
        setLeafletReady(true);
      });
    }
  }, []);

  if (loading) return <p>Loading sensors…</p>;
  if (!leafletReady || !leafletComponents) return <p>Loading map…</p>;

  const { MapContainer, Marker, Popup, TileLayer } = leafletComponents;
  const center: [number, number] = [38.1041, -122.2560];

  return (
    <div style={{ height: '60vh', width: '100%', marginTop: 20 }}>
      <MapContainer
        center={center}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {sensors.map(sensor => (
          <Marker
            key={sensor.sensor_id}
            position={[sensor.latitude, sensor.longitude]}
          >
            <Popup>
              <strong>{sensor.name}</strong><br />
              PM2.5: {sensor.pm2_5}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
