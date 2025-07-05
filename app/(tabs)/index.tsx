import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MapComponent from './MapComponent';

export default function Index() {
  const [sensors, setSensors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://192.168.1.36:5001/api/mock-sensors')
      .then(res => res.json())
      .then(data => {
        setSensors(data.sensors);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <View style={styles.container}>
      <MapComponent sensors={sensors} loading={loading} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
