import React from 'react';
import { MdLocationOn } from 'react-icons/md';
import { BsArrowsMove } from 'react-icons/bs';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdMail } from 'react-icons/md';

interface Property {
  state: string;
  country: string;
  type: string;
  id: string;
}

function House({ property }: { property: Property }) {
  return <div>House</div>;
}

export default House;
