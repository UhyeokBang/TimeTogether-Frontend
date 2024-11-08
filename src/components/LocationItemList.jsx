import React from "react";
import LocationItem from "./LocationItem";
import "./LocationItemList.css";

const LocationItemList = ({
  locations,
  selectedLocationIds,
  onSelectLocation,
  onDeleteLocation,
}) => {
  return (
    <ul className="location-list">
      {locations.map((location) => (
        <LocationItem
          key={location.locationId}
          locationId={location.locationId}
          locationName={location.locationName}
          url={location.locationUrl}
          attendanceCount={4} // 서버에서 받아오는 데이터
          totalMembers={5} // 그룹의 총 인원 수
          isSelected={selectedLocationIds.includes(location.locationId)}
          onSelect={() => onSelectLocation(location.locationId)}
          onDelete={() => onDeleteLocation(location.locationId)}
        />
      ))}
    </ul>
  );
};

export default LocationItemList;
