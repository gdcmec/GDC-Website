import React from 'react';
import './MobileLoader.css';
import { useState, useEffect } from 'react';
import logo from '../../assets/gdc.gif'
const MobileLoader = () => {
  const [showGradient, setShowGradient] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowGradient(true);
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <div className="h-[100vh] flex justify-center items-center">
      <svg width="637" height="480" viewBox="0 0 637 480" fill="none" xmlns="http://www.w3.org/2000/svg">
        {
          <linearGradient className="animated-gradient" id="gradientCrown" gradientTransform="rotate(120)">
            <stop offset="0%" stopColor="#d4af370" stopOpacity={1} />
            <stop offset="50%" stopColor="#c18b2e0" stopOpacity={1} />
            <stop offset="100%" stopColor="#d4af370" stopOpacity={1} />
          </linearGradient>
        }
        <path
          fill="url(#gradientCrown)"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M279.453 0.516622C221.302 5.76473 169.483 28.0435 125.878 66.5453C120.508 71.2867 113.317 78.3188 109.898 82.1727C106.48 86.0266 102.43 90.5491 100.899 92.2231C92.3893 101.53 79.0796 122.364 70.5408 139.743C59.4982 162.219 51.3039 190.903 48.199 217.954C46.4133 233.501 47.4639 264.064 50.2503 277.658C51.4317 283.426 52.6242 288.369 52.8988 288.644C53.1735 288.919 53.7847 288.453 54.2571 287.608C56.6499 283.33 73.6038 260.846 81.7402 251.161C98.3165 231.431 123.936 207.792 144.348 193.392C150.066 189.36 151.219 188.034 152.144 184.44C159.984 153.974 172.438 135.247 198.559 114.646C227.963 91.4536 251.523 81.8139 289.933 77.2584C330.631 72.431 375.101 80.8894 412.28 100.529C427.392 108.511 453.725 130.417 453.725 135.005C453.725 138.755 422.507 166.447 401.974 180.91L393.917 186.585L392.827 180.904C392.227 177.78 390.434 169.377 388.843 162.231C387.252 155.085 385.494 146.539 384.938 143.241C384.382 139.943 382.558 130.498 380.887 122.253C379.214 114.007 377.109 103.55 376.21 99.0154C375.014 92.9917 374.162 90.7699 373.045 90.7699C371.074 90.7699 337.954 99.1223 326.891 102.41C215.482 135.508 124.239 203.897 57.5458 304.287C52.1169 312.459 45.847 322.293 43.611 326.14C41.3749 329.988 37.429 336.735 34.8424 341.132C28.6415 351.673 8.82639 391.468 3.52731 404.025C-0.481456 413.522 -1.15558 417.346 1.9284 413.091C9.93993 402.037 30.8416 378.103 46.7569 361.76C98.0808 309.054 163.441 262.842 236.33 227.724C270.162 211.424 313.908 193.585 313.908 196.089C313.908 198.782 317.174 223.471 319.872 241.187C321.464 251.631 323.041 262.65 323.379 265.674C324.222 273.252 326.685 289.226 327.846 294.658C328.374 297.131 329.106 302.227 329.472 305.981C329.877 310.142 330.645 313.002 331.438 313.306C333.566 314.123 380.57 288.215 409.783 270.124C419.383 264.18 439.08 251.071 443.712 247.543C445.1 246.486 451.628 241.522 458.22 236.51C487.612 214.161 507.637 191.983 517.141 171.251C522.789 158.927 523.139 157.225 523.085 142.242C523.039 129.451 522.8 127.649 520.312 121.253C512.753 101.827 499.412 85.175 473.263 62.5305C432.424 27.164 382.961 6.24647 327.466 0.875426C317.358 -0.102036 288.689 -0.316919 279.453 0.516622ZM627.774 105.512C621.078 115.739 607.535 134.39 602.919 139.743C601.733 141.117 597.687 145.84 593.927 150.237C590.167 154.635 583.487 161.967 579.082 166.531C574.676 171.096 570.934 175.22 570.766 175.698C570.354 176.862 534.285 210.554 523.754 219.612C510.146 231.316 483.19 252.65 468.588 263.274C445.122 280.348 441.574 282.804 418.94 297.656C406.793 305.627 396.986 312.585 397.149 313.119C397.313 313.652 401.233 316.367 405.862 319.152C432.719 335.313 445.294 342.947 445.736 343.359C447.097 344.626 421.598 365.103 410.282 371.83C393.026 382.09 374.357 389.221 353.926 393.357C341.587 395.856 338.406 396.102 318.402 396.102C299.338 396.102 294.845 395.789 284.446 393.736C260.675 389.045 236.904 379.615 218.533 367.589C191.519 349.905 169.316 323.848 158.128 296.699C153.592 285.69 154.154 285.872 144.782 292.364C131.411 301.627 118.274 311.48 107.677 320.197C95.7569 330 76.1794 348.679 76.2024 350.227C76.2274 351.935 86.9164 369.28 93.0794 377.612C123.954 419.357 163.2 447.951 213.295 465.2C227.726 470.168 248.656 475.124 264.138 477.238C282.355 479.725 321.12 479.721 338.875 477.229C413.657 466.737 478.387 427.301 517.585 368.353C526.675 354.683 537.185 334.562 536.36 332.41C536.064 331.637 526.112 324.738 514.243 317.078C502.376 309.42 492.78 302.684 492.92 302.111C493.06 301.537 497.432 297.264 502.636 292.616C512.76 283.573 542.986 253.765 551.239 244.685C557.853 237.409 573.669 218.058 580.653 208.696C604.857 176.252 625.019 137.071 633.523 105.954C634.678 101.725 635.848 97.4793 636.122 96.5168C637.331 92.2821 634.296 95.5523 627.774 105.512Z"
          //   fill="yellow"
          stroke-dasharray="1000"
          stroke-dashoffset="50000"
          stroke-width="8"
          stroke="#000"
        />

        <animate attributeName="stroke-dashoffset" from="1000000" to="0" dur="8s" fill="ease" begin="0s" />
        <animate attributeName="stroke" from="#000" to="#0ff" dur="8s" fill="ease" begin="0s" />
      </svg> */}
    </div>
  );
};

export default MobileLoader;