import React from 'react';
// import cn from 'classnames';

import './recipe-instructions.css';

export default function InstructionContainer({ children, type }) {
  return (
    <div className={`instruction-container recipe-${type}`}>
      {children}
    </div>
  )
}
