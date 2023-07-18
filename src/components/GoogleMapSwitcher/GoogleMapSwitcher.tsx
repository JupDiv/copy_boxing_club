import {
  ContactsMapSwitcher,
  ContactsMapSwitcherItem,
  ContactsMapSwitcherButton,
} from './GoogleMapSwitcher.styles';

type GoogleMapsProps = {
  onChangePosition: (position: MapType) => void;
};

type MapType = {
  lat: number;
  lng: number;
};

export default function GoogleMapSwitcher({
  onChangePosition,
}: GoogleMapsProps) {
  const positions = [
    { lat: 50.430386, lng: 30.52521 },
    { lat: 50.4223104, lng: 30.5243627 },
    { lat: 50.4341521, lng: 30.5131364 },
  ];
  return (
    <ContactsMapSwitcher>
      <ContactsMapSwitcherItem>
        <ContactsMapSwitcherButton
          onClick={() => onChangePosition(positions[0])}
        >
          Зеленка
        </ContactsMapSwitcherButton>
      </ContactsMapSwitcherItem>
      <ContactsMapSwitcherItem>
        <ContactsMapSwitcherButton
          onClick={() => onChangePosition(positions[1])}
        >
          Puncher
        </ContactsMapSwitcherButton>
      </ContactsMapSwitcherItem>
      <ContactsMapSwitcherItem>
        <ContactsMapSwitcherButton
          onClick={() => onChangePosition(positions[2])}
        >
          Зал Антановіча
        </ContactsMapSwitcherButton>
      </ContactsMapSwitcherItem>
    </ContactsMapSwitcher>
  );
}
