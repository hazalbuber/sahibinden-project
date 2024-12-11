import React from 'react';
import { Link } from 'react-router-dom';

const SidebarSection = ({ title, items }) => {
  return (
    <div className="sidebar-section">
      {title && <h3>{title}</h3>}
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <Link to={`/kategori/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarSection;
