import React, { useState } from 'react';

export const Accordion: React.FC<{ title: string }> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        className="d-flex justify-content-between align-items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="mb-0">{title}</p>
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <div>{children}</div>}
    </div>
  );
};
