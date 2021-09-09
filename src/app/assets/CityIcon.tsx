import React from 'react';

export default function CityIcon(
  props: React.SVGProps<SVGSVGElement>
): JSX.Element {
  return (
    <svg
      width="55"
      height="55"
      viewBox="0 0 55 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M29.2188 6.29517C29.2188 5.83933 29.0377 5.40215 28.7153 5.07983C28.393 4.7575 27.9558 4.57642 27.5 4.57642C27.0442 4.57642 26.607 4.7575 26.2847 5.07983C25.9623 5.40215 25.7812 5.83933 25.7812 6.29517V9.16662H21.1979C20.1343 9.16662 19.1142 9.58915 18.3621 10.3412C17.61 11.0933 17.1875 12.1134 17.1875 13.177V18.1156C20.6708 17.7993 24.0625 20.4897 24.0625 24.4016V48.6979C24.0625 48.7575 24.0625 48.817 24.0579 48.8766V50.4166H30.9329V47.552H30.9375V30.3645C30.9375 28.6931 31.6015 27.0902 32.7833 25.9083C33.9652 24.7264 35.5682 24.0625 37.2396 24.0625H37.8125V13.177C37.8125 12.1134 37.39 11.0933 36.6379 10.3412C35.8858 9.58915 34.8657 9.16662 33.8021 9.16662H29.2188V6.29517Z"
        fill="white"
      />
      <path
        d="M33.2247 50.4166H42.9688C44.0325 50.4166 45.0525 49.9941 45.8046 49.242C46.5567 48.4899 46.9793 47.4698 46.9793 46.4062V30.3645C46.9793 29.3009 46.5567 28.2808 45.8046 27.5287C45.0525 26.7766 44.0325 26.3541 42.9688 26.3541H37.2397C36.176 26.3541 35.156 26.7766 34.4039 27.5287C33.6518 28.2808 33.2293 29.3009 33.2293 30.3645V47.552H33.2247V50.4166Z"
        fill="white"
      />
      <path
        d="M21.7708 47.5521H21.7663V50.4167H12.0313C10.9676 50.4167 9.94757 49.9941 9.19547 49.242C8.44337 48.4899 8.02084 47.4699 8.02084 46.4062V28.1646C8.02084 26.8125 8.70147 25.5521 9.83126 24.8119L15.5604 21.0512C18.2256 19.2981 21.7708 21.2117 21.7708 24.4017V47.5521Z"
        fill="white"
      />
    </svg>
  );
}
