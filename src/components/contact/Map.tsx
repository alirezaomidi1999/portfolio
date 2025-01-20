"use client";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Position } from "@/types/Interfaces";


const Map = ({
  position = { lat: 35.656976, lng: 51.482507 },
}: {
  position?: Position;
}) => {
  const basePath = process.env.basePath ?? '';
  const mapMarkerIcon = new L.Icon({
    iconUrl: `${basePath}/images/map-marker.svg`,
    iconSize: [32, 32],
    className: "invert-[1] filter",
  });
  return (
    <section className="relative h-[500px] overflow-hidden rounded-[18px] border border-solid border-jet">
      <MapContainer
        center={position}
        className="h-full w-full grayscale-[1] invert-[1] filter"
        zoom={16}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <Marker position={position} icon={mapMarkerIcon}>
          <Popup className="grayscale-[1] invert-[1] filter">
            <div>
              <h3>I am here!</h3>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </section>
  );
};

export default Map;
