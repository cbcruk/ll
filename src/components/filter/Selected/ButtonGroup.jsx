import React from 'react';
import useRouter from '../../../hooks/useRouter';

function ButtonGroup({ items, query, name }) {
  const { removeValue } = useRouter();

  return items
    .filter((item) => query.includes(item.value))
    .map((item) => (
      <button
        key={item.value}
        onClick={() => {
          removeValue({
            name,
            value: item.value,
          });
        }}
        className="py-1 px-2 rounded-full text-blue-500 border border-blue-400 text-xs"
      >
        {item.label} X
      </button>
    ));
}

export default ButtonGroup