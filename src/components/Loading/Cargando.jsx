
import React, { useState } from "react";


const LoadingDot1 = (...props) => (
  <svg
    width={349}
    height={72}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <mask
      id="a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={349}
      height={72}
    >
      <path
        d="M0 8h4V3.5h4V0h11.5v4H328V0h12v4h4v4l4 .5.5 55.5h-4v4H340v3.5H8V68H4v-3.5H0V8Z"
        fill="#000"
      />
    </mask>
    <g mask="url(#a)">
      <path fill="url(#b)" d="M-6-1h357v76H-6z" />
      <path fill="#FFD284" d="M252 40h10v13h-10zM264 36h15v20h-15z" />
    </g>
    <defs>
      <pattern
        id="b"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#c" transform="scale(.0028 .01316)" />
      </pattern>
      <image
        id="c"
        width={357}
        height={76}
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>

);

const LoadingDot2 = (...props) => (
  <svg
    width={349}
    height={72}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <mask
      id="a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={349}
      height={72}
    >
      <path
        d="M0 8h4V3.5h4V0h11.5v4H328V0h12v4h4v4l4 .5.5 55.5h-4v4H340v3.5H8V68H4v-3.5H0V8Z"
        fill="#000"
      />
    </mask>
    <g mask="url(#a)">
      <path fill="url(#b)" d="M-6-1h357v76H-6z" />
      <path fill="#FFD284" d="M264 36h15v18h-15z" />
    </g>
    <defs>
      <pattern
        id="b"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#c" transform="scale(.0028 .01316)" />
      </pattern>
      <image
        id="c"
        width={357}
        height={76}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWUAAABMCAYAAAC1UabxAAAJAElEQVR4nO3dz2sc5x0G8Od9Z3Z2V7uSLNWOWrvYLonBNXVJcZ0SWloiUtODSX1xeuylGBJfCgWTo4/FUMglLYT+A20uoXFLoMGUYGhwUlowde20hDjETqJYEpK80u78eN8eZMszs56dmZ0Z6dXu8zntSPNrZ1dfve+z77wrapatQURERrCH3fDS/P5c61+4cnfYQxERGaXK+ifzngwREVWHRZmIyCAsykREBsmcKcczlLMvnRm4/srN28OdERGR4U49953I8vTRQylbvBlZGpQxs6VMRGQQFmUiIoOwKBMRGSQxU86bIR946omBy2nimUx8+zv/Wyj0eyIaXUXrQ/z3aZ+JHTt9Mtf59NfP5IyZLWUiIoOwKBMRGYRFmYjIIEPPfZHq4DOxH7wfWSqaIccxQyYaX3nrQ9760pcxx+vbJ9cGn2AObCkTERmERZmIyCAsykREBhk6U07NaA7m2992jTN+949vbz1+7fV/5dr2/Lmntx7/8MWflHZORLS90upXXnnHQQ/CljIRkUFYlImIDFLdkDiD3L76wdbjvJFFWHhbxheUJEtE9od3Xtmu06FdZuiiXHYGnLY957YgomGl1Y+iGXOZGTXjCyIig4xHfHH3Xuo64e5kOO4Ib1sk+qDRliUiY2RBWbClTERkkNLGKReVN/MhIsoq72dWZR8vz/5HNr7I0p0M3wwSdugH3320ENoPu59EVDXGF0REBmFRJiIyiLHjlLdjXHKWG0AiUQYRjYQy56rIsv882FImIjIIizIRkUFGdvTFdioyHWjSiI7w6JELF9957Drh0SNZRpgkxTVVT2c6ztcnr7zH4nSyo2fs5lMmIuJ8ykRElAnjiyHlvTklaZ1wdzWp+3np4vNbj8Nd9Szd26TpRss6/6r3v9uvTxZFjsXpZEcPW8pERAYxdpxy1ccjovGxm+ZTHuv4IkvXuIhD+/emrpPU/QzftBLu3iYJd+HDkkYmZBE+nypGHezU9SlyTcKqvj5hWa4VjQbGF0REBmFRJiIyyFjMp1zkk+ukwfxJccFOSerOF5luNPzciXaz3TSfMlvKREQGYVEmIjLIyI6+SPr2kCQ/e/7XpZ9Dli9srULe6UazxDtV2KnrU5a88U6R0T55r1WWuUGSviy4ivUpO2PHKXNcMhFVhfMpExFRJiMbXyQpMl9BUvctb/c/6UaGcIRSddcvKd5JGlUS7j4Xmd5zt1yfsCLxTtK2SfFF3mMlffkv7V5sKRMRGWT4ccrzpwev8Mm1XPtjhkxEZal6rou++nbwmej+Y/PJ37lyOfOuRc2y9eN+cWl+f2T57EtnogfNWZRvXH4/sjx99NDAzasqylnmSQjLMpIhyz6zzNWQdKy862eR9Ol5kW/6yLJtkqqvT5FrWOQ9E962ivdS3v2U9R6r4j1ZpryNvLSivHLzdmT52OmT0RViRblv/7Gi/Mbv3owsX7hyd+sx4wsiIoOwKBMRGSRzfPHLN34fWU7LSOLxxo3fvhZZjscXzJC3V5Y4Ii/eLECjIh5n9MUXL5+Prp+zHr569heRZcYXRESGYlEmIjLI2N08Qv2K3FDDmxeIyjV0UU7LWNLGKRfNkDmumYiqEq8n8XoXr29pn6EdmM9+bMYXREQGYXwxpvLOfZG4LRGVii1lIiKDZG8pxzKUeIYcz1Di0m6rzosZMhFtl3j9ik8bAUSX837GFsb4ghhHEBmE8QURkUFYlImIDJI490Vc31wYvzkXXSFl6joiorERy5Bf/dXrkeXwXBdxbCkTERmERZmIyCAsykREBsmcKcddPCEiyzc6R0o5ISKi3e5Y67+R5Yv/yF5m2VImIjIIizIRkUFYlImIDCLO//zHQ2XKj91ZUAesDQSewOqyh7sLX2Bici8++vBjzLYlmjWBFV9iYc1FTTaARrn/Ezbah6Ejz+bRgo49SxGNxPvkXX/cSUvClkDdFpjbO4t79xbR8xV6PqCEBaigxKM9ejEevi46/oJtM601pJTQGtAqALSGkPLB+Qns7Nml01pDWhaUUgAAy7YRuO7mn5AAHMeB53nQSj14XmLrOVqWBc/3d/YJ5DDRuZ2+Ug5++zAAgb4SEf5BjjeAfeb7X4WG7itCw1C6Bb+1AP8+UK8fxtt/+TNOnvoRXjl3Fc89KXH06Cz+emsJ1z9XcFHH3Ny+4gcN+XL64Nbj8B+phoZWj5bFw7/kpEKr+/chWJUH0qIJ4XUwKQRq+Aq+DGz0tI2gOYnOahfS8YodQETf9vHX42Ex2Sm1mgPl+wiUB2kBQgpIISGkgCUkNrwy/ymVTwGACtCYnES3s46a5UA7m9fU91zYAaCEQrM9gUajjuXlZaj7a5g58HUcP34cV//+3o6efx5znZul7q+75xv99WGrxGw+yNNosB2rBV/7sOwA8FwIpwk0WkDPB9wAqAlAaLi9Lpx6Axudj9CszwP+p3D9z+HUvgVM3UKwWoeFr0H7QLd+F000sU/6mJUbmGnvgyUX0ZZLqDcn4KkNKOjSm5/SacLtdjdbZZYFaW3Ot6S0RrPVRK/rQukAllWDlAKu5wFBAEgJR7Th+otArYd6cxq99RrgOWi1bHRWvkCrZeH+Wg+iOQMdCNg1BeEt4dmTT+F7J74J1V3Dfz78DO998DGW1jQm2lPw3EXsmXbx9LcP490rn8Gr1aEsG/B7gK0BYaPe2IPemgc4ASaaU+iurEI4HtDSCLrrgNUGgibmRICVxhKmZ3xMrnfw6bKFrnsCsO9gn1zFqpqE9gO88MIZvPWny7BqDtaXl2HPzkILgUBV3ZIR0LVJrGng1oKHQE9vvjF9AM06pHYGbu0XfCvIlKaIsoodQIrBvTpXa0DWoGUTCqH/93rzsbIKHT7dgxY5HrTOtQag1OYJaIVGZwLdOQkEPgAXWPVx6qdv4W/XnoXy2nBWpiBsBe0K2FYTgSegtIQUDqRtw7efAHrXMRUoBKsKYs8s4MxiZaWL7uoNKHsagIJjefC7HUAo2I02FASkADyv2r5CrV6Hu7SIqZlpyMDDkSNH8M/r/4Zv2YCsATKAUBra98qvO/bme1vHSlq4UIcbhWn+DwOPC49OSQ0LAAAAAElFTkSuQmCC"
      />
    </defs>
  </svg>
);

const LoadingDot3 = (...props) => (
    <svg
    width={349}
    height={72}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <mask
      id="a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={349}
      height={72}
    >
      <path
        d="M0 8h4V3.5h4V0h11.5v4H328V0h12v4h4v4l4 .5.5 55.5h-4v4H340v3.5H8V68H4v-3.5H0V8Z"
        fill="#000"
      />
    </mask>
    <g mask="url(#a)">
      <path fill="url(#b)" d="M-6-1h357v76H-6z" />
    </g>
    <defs>
      <pattern
        id="b"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#c" transform="scale(.0028 .01316)" />
      </pattern>
      <image
        id="c"
        width={357}
        height={76}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWUAAABMCAYAAAC1UabxAAAJAElEQVR4nO3dz2sc5x0G8Od9Z3Z2V7uSLNWOWrvYLonBNXVJcZ0SWloiUtODSX1xeuylGBJfCgWTo4/FUMglLYT+A20uoXFLoMGUYGhwUlowde20hDjETqJYEpK80u78eN8eZMszs56dmZ0Z6dXu8zntSPNrZ1dfve+z77wrapatQURERrCH3fDS/P5c61+4cnfYQxERGaXK+ifzngwREVWHRZmIyCAsykREBsmcKcczlLMvnRm4/srN28OdERGR4U49953I8vTRQylbvBlZGpQxs6VMRGQQFmUiIoOwKBMRGSQxU86bIR946omBy2nimUx8+zv/Wyj0eyIaXUXrQ/z3aZ+JHTt9Mtf59NfP5IyZLWUiIoOwKBMRGYRFmYjIIEPPfZHq4DOxH7wfWSqaIccxQyYaX3nrQ9760pcxx+vbJ9cGn2AObCkTERmERZmIyCAsykREBhk6U07NaA7m2992jTN+949vbz1+7fV/5dr2/Lmntx7/8MWflHZORLS90upXXnnHQQ/CljIRkUFYlImIDFLdkDiD3L76wdbjvJFFWHhbxheUJEtE9od3Xtmu06FdZuiiXHYGnLY957YgomGl1Y+iGXOZGTXjCyIig4xHfHH3Xuo64e5kOO4Ib1sk+qDRliUiY2RBWbClTERkkNLGKReVN/MhIsoq72dWZR8vz/5HNr7I0p0M3wwSdugH3320ENoPu59EVDXGF0REBmFRJiIyiLHjlLdjXHKWG0AiUQYRjYQy56rIsv882FImIjIIizIRkUFGdvTFdioyHWjSiI7w6JELF9957Drh0SNZRpgkxTVVT2c6ztcnr7zH4nSyo2fs5lMmIuJ8ykRElAnjiyHlvTklaZ1wdzWp+3np4vNbj8Nd9Szd26TpRss6/6r3v9uvTxZFjsXpZEcPW8pERAYxdpxy1ccjovGxm+ZTHuv4IkvXuIhD+/emrpPU/QzftBLu3iYJd+HDkkYmZBE+nypGHezU9SlyTcKqvj5hWa4VjQbGF0REBmFRJiIyyFjMp1zkk+ukwfxJccFOSerOF5luNPzciXaz3TSfMlvKREQGYVEmIjLIyI6+SPr2kCQ/e/7XpZ9Dli9srULe6UazxDtV2KnrU5a88U6R0T55r1WWuUGSviy4ivUpO2PHKXNcMhFVhfMpExFRJiMbXyQpMl9BUvctb/c/6UaGcIRSddcvKd5JGlUS7j4Xmd5zt1yfsCLxTtK2SfFF3mMlffkv7V5sKRMRGWT4ccrzpwev8Mm1XPtjhkxEZal6rou++nbwmej+Y/PJ37lyOfOuRc2y9eN+cWl+f2T57EtnogfNWZRvXH4/sjx99NDAzasqylnmSQjLMpIhyz6zzNWQdKy862eR9Ol5kW/6yLJtkqqvT5FrWOQ9E962ivdS3v2U9R6r4j1ZpryNvLSivHLzdmT52OmT0RViRblv/7Gi/Mbv3owsX7hyd+sx4wsiIoOwKBMRGSRzfPHLN34fWU7LSOLxxo3fvhZZjscXzJC3V5Y4Ii/eLECjIh5n9MUXL5+Prp+zHr569heRZcYXRESGYlEmIjLI2N08Qv2K3FDDmxeIyjV0UU7LWNLGKRfNkDmumYiqEq8n8XoXr29pn6EdmM9+bMYXREQGYXwxpvLOfZG4LRGVii1lIiKDZG8pxzKUeIYcz1Di0m6rzosZMhFtl3j9ik8bAUSX837GFsb4ghhHEBmE8QURkUFYlImIDJI490Vc31wYvzkXXSFl6joiorERy5Bf/dXrkeXwXBdxbCkTERmERZmIyCAsykREBsmcKcddPCEiyzc6R0o5ISKi3e5Y67+R5Yv/yF5m2VImIjIIizIRkUFYlImIDCLO//zHQ2XKj91ZUAesDQSewOqyh7sLX2Bici8++vBjzLYlmjWBFV9iYc1FTTaARrn/Ezbah6Ejz+bRgo49SxGNxPvkXX/cSUvClkDdFpjbO4t79xbR8xV6PqCEBaigxKM9ejEevi46/oJtM601pJTQGtAqALSGkPLB+Qns7Nml01pDWhaUUgAAy7YRuO7mn5AAHMeB53nQSj14XmLrOVqWBc/3d/YJ5DDRuZ2+Ug5++zAAgb4SEf5BjjeAfeb7X4WG7itCw1C6Bb+1AP8+UK8fxtt/+TNOnvoRXjl3Fc89KXH06Cz+emsJ1z9XcFHH3Ny+4gcN+XL64Nbj8B+phoZWj5bFw7/kpEKr+/chWJUH0qIJ4XUwKQRq+Aq+DGz0tI2gOYnOahfS8YodQETf9vHX42Ex2Sm1mgPl+wiUB2kBQgpIISGkgCUkNrwy/ymVTwGACtCYnES3s46a5UA7m9fU91zYAaCEQrM9gUajjuXlZaj7a5g58HUcP34cV//+3o6efx5znZul7q+75xv99WGrxGw+yNNosB2rBV/7sOwA8FwIpwk0WkDPB9wAqAlAaLi9Lpx6Axudj9CszwP+p3D9z+HUvgVM3UKwWoeFr0H7QLd+F000sU/6mJUbmGnvgyUX0ZZLqDcn4KkNKOjSm5/SacLtdjdbZZYFaW3Ot6S0RrPVRK/rQukAllWDlAKu5wFBAEgJR7Th+otArYd6cxq99RrgOWi1bHRWvkCrZeH+Wg+iOQMdCNg1BeEt4dmTT+F7J74J1V3Dfz78DO998DGW1jQm2lPw3EXsmXbx9LcP490rn8Gr1aEsG/B7gK0BYaPe2IPemgc4ASaaU+iurEI4HtDSCLrrgNUGgibmRICVxhKmZ3xMrnfw6bKFrnsCsO9gn1zFqpqE9gO88MIZvPWny7BqDtaXl2HPzkILgUBV3ZIR0LVJrGng1oKHQE9vvjF9AM06pHYGbu0XfCvIlKaIsoodQIrBvTpXa0DWoGUTCqH/93rzsbIKHT7dgxY5HrTOtQag1OYJaIVGZwLdOQkEPgAXWPVx6qdv4W/XnoXy2nBWpiBsBe0K2FYTgSegtIQUDqRtw7efAHrXMRUoBKsKYs8s4MxiZaWL7uoNKHsagIJjefC7HUAo2I02FASkADyv2r5CrV6Hu7SIqZlpyMDDkSNH8M/r/4Zv2YCsATKAUBra98qvO/bme1vHSlq4UIcbhWn+DwOPC49OSQ0LAAAAAElFTkSuQmCC"
      />
    </defs>
  </svg>
);

const LoadingScreen = () => {
  const [dot, setDot] = useState(1);

  setTimeout(() => {
    setDot(dot % 3 + 1);
  }, 300);

  return (
    <div className="absolute w-60 md:w-auto  bottom-4 left-4">
      {dot === 1 && <LoadingDot1 />}
      {dot === 2 && <LoadingDot2 />}
      {dot === 3 && <LoadingDot3 />}
    </div>
  );
};

export default LoadingScreen;