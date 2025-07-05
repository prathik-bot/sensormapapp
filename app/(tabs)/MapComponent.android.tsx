// MapComponent.android.tsx
import React from 'react';
import { ActivityIndicator, Dimensions, StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

type Sensor = {
  sensor_id: number;
  latitude: number;
  longitude: number;
  name: string;
  pm2_5: number;
};

type Props = {
  sensors?: Sensor[]; // optional, default to empty array
  loading: boolean;
};

export default function MapComponent({ sensors = [], loading }: Props) {
  const initialRegion = {
    latitude: 38.1041,
    longitude: -122.2560,
    latitudeDelta: 0.08,
    longitudeDelta: 0.08,
  };

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <MapView style={styles.map} initialRegion={initialRegion}>
      {sensors.map(sensor => (
        <Marker
          key={sensor.sensor_id}
          coordinate={{ latitude: sensor.latitude, longitude: sensor.longitude }}
          title={sensor.name}
          description={`PM2.5: ${sensor.pm2_5}`}
        />
      ))}
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.6,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
