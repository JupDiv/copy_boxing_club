/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { useState } from 'react';
import {
  ContactsWrapper,
  ContactsMapContainer,
  ContactsTitle,
  ContactsList,
  ContactsListItem,
} from './Contacts.styles';
import IconMessanger from '../IconMessage/IconMessangers';
import SocialIcon from '../SocialIcon/SocialIcon';
import GoogleMaps from '../GoogleMaps/GoogleMaps';
import GoogleMapSwitcher from '../GoogleMapSwitcher/GoogleMapSwitcher';

type ContactsProps = {
  authKey: string;
};

type MapType = {
  lat: number;
  lng: number;
};

export default function Contacts({ authKey }: ContactsProps) {
  const [mapState, setMapState] = useState<MapType>({
    lat: 50.430386,
    lng: 30.52521,
  });

  const onChangePosition = (position: MapType) => {
    setMapState(position);
  };

  return (
    <ContactsWrapper>
      <ContactsMapContainer>
        <GoogleMaps authKey={authKey} position={mapState} />
        <GoogleMapSwitcher onChangePosition={onChangePosition} />
      </ContactsMapContainer>

      <ContactsList>
        <ContactsListItem>
          <ContactsTitle>Телефон:</ContactsTitle>
          <a style={{ color: '#1cd6ce' }} href="tel:+380 63 184 60 52">
            +380 63 184 60 52
          </a>
        </ContactsListItem>
        <ContactsListItem>
          <ContactsTitle>Месенджери:</ContactsTitle>
          <IconMessanger place="contacts" />
        </ContactsListItem>
        <ContactsListItem>
          <ContactsTitle>Соціальні мережі:</ContactsTitle>
          <SocialIcon place="contacts" />
        </ContactsListItem>
      </ContactsList>
    </ContactsWrapper>
  );
}
