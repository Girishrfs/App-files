
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';

export default function JustDialScreen() {
  const [businesses, setBusinesses] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/businesses')
      .then(res => res.json())
      .then(data => setBusinesses(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: '#f3f3f3', padding: 10 }}>
      <FlatList
        data={businesses}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={{ backgroundColor: '#ff5722', padding: 15, marginBottom: 10, borderRadius: 8 }}>
            <Text style={{ color: '#fff', fontSize: 18 }}>{item.name}</Text>
            <Text style={{ color: '#fff' }}>{item.phone}</Text>
            <Text style={{ color: '#fff' }}>{item.address}</Text>
          </View>
        )}
      />
    </View>
  );
}
