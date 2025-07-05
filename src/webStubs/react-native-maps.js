
// export default {
//   Marker: () => null,
//   MapView: () => null,
// };

// src/webStubs/react-native-maps.js

const MapView = ({ children, ...props }) => {
  return <div {...props} style={{ width: '100%', height: '100%', backgroundColor: '#ddd' }}>
    {/* Optionally put a placeholder message */}
    <p>Map is not supported on web in this stub.</p>
    {children}
  </div>;
};

const Marker = () => null;
const PROVIDER_GOOGLE = null;

export {
    MapView,
    Marker,
    PROVIDER_GOOGLE
};

export default MapView;
