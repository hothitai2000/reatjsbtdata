
    import React, { useState } from 'react';
    function FavoriteColor() {
        const [color, setColor] = useState("");
      
        return (
          <>
            <h1>My FavoriteColor is {color}!</h1>
            <button
              type="button"
              onClick={() => setColor('Blue')}
            >Blue</button>
            <button
              type="button"
              onClick={() => setColor('Red')}
            >Red</button>
            <button
              type="button"
              onClick={() => setColor('Pink')}
            >Pink</button>
            <button
              type="button"
              onClick={() => setColor('Green')}
            >Green</button>
          </>
        );
      }
    
    export default FavoriteColor;
    