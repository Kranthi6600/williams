import React from 'react';
import parse from 'html-react-parser';
import Div from '../Div';

export default function IconBox({ title, subtitle, icon }) {
  return (
    <Div className="cs-iconbox cs-style1 text-center">
      <Div className="cs-iconbox_icon">
        <img src={icon} alt="Icon" />
      </Div>
      <h3 className="cs-iconbox_title">{parse(title)}</h3>
      <Div className="cs-iconbox_subtitle">{parse(subtitle)}</Div>
    </Div>
  );
}
