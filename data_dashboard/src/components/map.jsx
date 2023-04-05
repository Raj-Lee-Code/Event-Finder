import React from "react";
import { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl'; 


mapboxgl.accessToken = 'pk.eyJ1IjoicmFqYXBhdGVsIiwiYSI6ImNsZzQ2NTE2bDAyYWMza2s5ZXFobXhtMGoifQ._f6iwSKf_RIBd8EwIMa8iw'

const Map = ({lat,lon}) => {
       
    const mapContainerRef = useRef(null);

    // Initialize map when component mounts
    useEffect(() => {

      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: "mapbox://styles/mapbox/streets-v12",
        center: [lon, lat],
        zoom: 18,
      });

      const marker = new mapboxgl.Marker().setLngLat([lon, lat]).addTo(map);
      map.addControl(new mapboxgl.NavigationControl(), "top-right");
  
      return () => map.remove();
    }, []);
  
    return <div className="map-container" ref={mapContainerRef} />;
  };

  export default Map;
  