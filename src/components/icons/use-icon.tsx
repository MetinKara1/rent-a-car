export interface IconProps {
  width?: number | string | undefined;
  height?: number | string | undefined;
  className?: string | undefined;
  variant?: string | undefined;
  fill?: string | undefined;
  stroke?: string | any | undefined;
  strokeWidth?: string | any | undefined;
}

export const useIcons = () => {
  const Logo = ({ width, height, className, variant, stroke }: IconProps) => {
    return (
      <svg
        fill="none"
        height="26"
        viewBox="0 0 131 26"
        width="131"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m.304 25v-23.84h4.16l8.928 12.128h-1.984l8.736-12.128h4.16v23.84h-4.384v-18.88l1.696.416-9.056 12.064h-.512l-8.832-12.064 1.44-.416v18.88zm39.3465.384c-1.7493 0-3.3813-.3093-4.896-.928s-2.8373-1.4827-3.968-2.592-2.016-2.4107-2.656-3.904c-.6187-1.5147-.928-3.1467-.928-4.896 0-1.7707.3093-3.40267.928-4.896s1.4933-2.79467 2.624-3.904 2.4533-1.96267 3.968-2.56c1.5147-.61867 3.1573-.928001 4.928-.928001s3.4133.309331 4.928.928001c1.5147.61866 2.8373 1.48267 3.968 2.592 1.1307 1.088 2.0053 2.37867 2.624 3.872.64 1.49333.96 3.1253.96 4.896 0 1.7493-.32 3.3813-.96 4.896-.64 1.4933-1.5253 2.7947-2.656 3.904s-2.4533 1.9733-3.968 2.592c-1.4933.6187-3.1253.928-4.896.928zm0-3.968c1.1733 0 2.2507-.2027 3.232-.608.9813-.4267 1.8347-1.0133 2.56-1.76.7467-.7467 1.312-1.632 1.696-2.656.4053-1.024.608-2.1333.608-3.328s-.2027-2.2933-.608-3.296c-.384-1.024-.9493-1.90933-1.696-2.656-.7253-.768-1.5787-1.35467-2.56-1.76s-2.0587-.608-3.232-.608c-1.152 0-2.2187.20267-3.2.608s-1.8453.992-2.592 1.76c-.7253.74667-1.2907 1.632-1.696 2.656-.4053 1.0027-.608 2.1013-.608 3.296s.2027 2.304.608 3.328.9707 1.9093 1.696 2.656c.7467.7467 1.6107 1.3333 2.592 1.76.9813.4053 2.048.608 3.2.608zm15.3898 3.584v-23.84h8.864c1.6213 0 3.0506.29867 4.288.896 1.2586.576 2.24 1.42933 2.944 2.56.704 1.10933 1.056 2.464 1.056 4.064 0 1.6427-.3947 3.04-1.184 4.192-.768 1.152-1.8134 2.0053-3.136 2.56l5.472 9.568h-4.928l-5.856-10.464 2.816 1.664h-5.984v8.8zm4.352-12.64h4.576c.7893 0 1.472-.1493 2.048-.448.576-.32 1.024-.7573 1.344-1.312s.48-1.19467.48-1.92c0-.74667-.16-1.38667-.48-1.92-.32-.55467-.768-.98133-1.344-1.28-.576-.32-1.2587-.48-2.048-.48h-4.576zm15.8442 12.64v-23.84h15.84v3.84h-11.488v6.112h10.848v3.84h-10.848v6.208h11.488v3.84zm18.0713 0v-23.84h3.392l13.1202 17.664-1.76.352v-18.016h4.352v23.84h-3.424l-12.9282-17.792 1.6-.352v18.144zm26.9822 0v-20h-6.176v-3.84h16.64v3.84h-6.08v20z"
          fill="#3563e9"
        />
      </svg>
    );
  };

  const SearchIcon = ({
    width,
    height,
    className,
    variant,
    stroke,
  }: IconProps) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
          stroke="#596780"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 22L20 20"
          stroke="#596780"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };

  const FilterIcon = ({
    width,
    height,
    className,
    variant,
    stroke,
  }: IconProps) => {
    return (
      <svg
        fill="none"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          stroke="#596780"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
        >
          <path d="m22 6.5h-6" />
          <path d="m6 6.5h-4" />
          <path d="m10 10c1.933 0 3.5-1.567 3.5-3.5s-1.567-3.5-3.5-3.5-3.5 1.567-3.5 3.5 1.567 3.5 3.5 3.5z" />
          <path d="m22 17.5h-4" />
          <path d="m8 17.5h-6" />
          <path d="m14 21c1.933 0 3.5-1.567 3.5-3.5s-1.567-3.5-3.5-3.5-3.5 1.567-3.5 3.5 1.567 3.5 3.5 3.5z" />
        </g>
      </svg>
    );
  };

  const HeartIcon = ({
    width,
    height,
    className,
    variant,
    stroke,
    fill = "#596780",
  }: IconProps) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 20 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.44 0.0999756C12.63 0.0999756 11.01 0.979976 10 2.32998C8.99 0.979976 7.37 0.0999756 5.56 0.0999756C2.49 0.0999756 0 2.59998 0 5.68998C0 6.87998 0.19 7.97998 0.52 8.99998C2.1 14 6.97 16.99 9.38 17.81C9.72 17.93 10.28 17.93 10.62 17.81C13.03 16.99 17.9 14 19.48 8.99998C19.81 7.97998 20 6.87998 20 5.68998C20 2.59998 17.51 0.0999756 14.44 0.0999756Z"
          fill={fill}
        />
      </svg>
    );
  };

  const NotificationIcon = ({
    width,
    height,
    className,
    variant,
    stroke,
  }: IconProps) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.3399 14.49L18.3399 12.83C18.1299 12.46 17.9399 11.76 17.9399 11.35V8.82C17.9399 6.47 16.5599 4.44 14.5699 3.49C14.0499 2.57 13.0899 2 11.9899 2C10.8999 2 9.91994 2.59 9.39994 3.52C7.44994 4.49 6.09994 6.5 6.09994 8.82V11.35C6.09994 11.76 5.90994 12.46 5.69994 12.82L4.68994 14.49C4.28994 15.16 4.19994 15.9 4.44994 16.58C4.68994 17.25 5.25994 17.77 5.99994 18.02C7.93994 18.68 9.97994 19 12.0199 19C14.0599 19 16.0999 18.68 18.0399 18.03C18.7399 17.8 19.2799 17.27 19.5399 16.58C19.7999 15.89 19.7299 15.13 19.3399 14.49Z"
          fill="#596780"
        />
        <path
          d="M14.8299 20.01C14.4099 21.17 13.2999 22 11.9999 22C11.2099 22 10.4299 21.68 9.87993 21.11C9.55993 20.81 9.31993 20.41 9.17993 20C9.30993 20.02 9.43993 20.03 9.57993 20.05C9.80993 20.08 10.0499 20.11 10.2899 20.13C10.8599 20.18 11.4399 20.21 12.0199 20.21C12.5899 20.21 13.1599 20.18 13.7199 20.13C13.9299 20.11 14.1399 20.1 14.3399 20.07C14.4999 20.05 14.6599 20.03 14.8299 20.01Z"
          fill="#596780"
        />
      </svg>
    );
  };

  const SettingsIcon = ({
    width,
    height,
    className,
    variant,
    stroke,
  }: IconProps) => {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.1 7.22006C16.29 7.22006 15.55 5.94006 16.45 4.37006C16.97 3.46006 16.66 2.30006 15.75 1.78006L14.02 0.790059C13.23 0.320059 12.21 0.600059 11.74 1.39006L11.63 1.58006C10.73 3.15006 9.25 3.15006 8.34 1.58006L8.23 1.39006C7.78 0.600059 6.76 0.320059 5.97 0.790059L4.24 1.78006C3.33 2.30006 3.02 3.47006 3.54 4.38006C4.45 5.94006 3.71 7.22006 1.9 7.22006C0.86 7.22006 0 8.07006 0 9.12006V10.8801C0 11.9201 0.85 12.7801 1.9 12.7801C3.71 12.7801 4.45 14.0601 3.54 15.6301C3.02 16.5401 3.33 17.7001 4.24 18.2201L5.97 19.2101C6.76 19.6801 7.78 19.4001 8.25 18.6101L8.36 18.4201C9.26 16.8501 10.74 16.8501 11.65 18.4201L11.76 18.6101C12.23 19.4001 13.25 19.6801 14.04 19.2101L15.77 18.2201C16.68 17.7001 16.99 16.5301 16.47 15.6301C15.56 14.0601 16.3 12.7801 18.11 12.7801C19.15 12.7801 20.01 11.9301 20.01 10.8801V9.12006C20 8.08006 19.15 7.22006 18.1 7.22006ZM10 13.2501C8.21 13.2501 6.75 11.7901 6.75 10.0001C6.75 8.21006 8.21 6.75006 10 6.75006C11.79 6.75006 13.25 8.21006 13.25 10.0001C13.25 11.7901 11.79 13.2501 10 13.2501Z"
          fill="#596780"
        />
      </svg>
    );
  };

  const WebChatIcon = ({
    width = 20,
    height = 18,
    className,
    variant,
    stroke = "#596780",
    fill = "#596780",
  }: IconProps) => {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 13 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.75 5.5C0.75 2.73857 2.98857 0.5 5.75 0.5C8.07919 0.5 10.0363 2.0925 10.592 4.24828C10.0073 3.93051 9.33724 3.75 8.625 3.75C8.01056 3.75 7.4275 3.88434 6.90359 4.12525C6.80439 4.03694 6.67403 3.98334 6.53125 3.98334C6.2206 3.98334 5.96875 4.23706 5.96875 4.55001C5.96875 4.6026 5.97586 4.65352 5.98917 4.70185C5.07927 5.4585 4.5 6.5991 4.5 7.875C4.5 8.8679 4.85081 9.77887 5.43523 10.4907C5.07299 10.4656 4.70828 10.4027 4.34236 10.3046L2.89726 10.9253C2.5613 11.0696 2.17337 11.019 1.88562 10.7934C1.59787 10.5678 1.45619 10.2031 1.51614 9.84246L1.74118 8.48858C1.11911 7.65514 0.75 6.61983 0.75 5.5ZM10.7388 5.5734C10.6694 6.04942 10.2637 6.41886 9.76704 6.42764C9.24818 6.43682 8.81464 6.04915 8.75607 5.5442L7 5.75L6.63439 8.4467C7.05 8.50298 7.40144 8.81895 7.4829 9.25376C7.57845 9.76379 7.26853 10.2559 6.78048 10.3978C6.00414 9.82927 5.5 8.91101 5.5 7.875C5.5 6.14911 6.89911 4.75 8.625 4.75C9.44018 4.75 10.1825 5.06213 10.7388 5.5734ZM4.28125 5.11669C4.5919 5.11669 4.84375 4.86299 4.84375 4.55001C4.84375 4.23706 4.5919 3.98334 4.28125 3.98334C3.9706 3.98334 3.71875 4.23706 3.71875 4.55001C3.71875 4.86299 3.9706 5.11669 4.28125 5.11669Z"
          fill={fill}
        />
        <mask id="path-2-inside-1_1_46510" fill="white">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.0006 8.99316L11.25 10.5L10.1904 9.98229"
          />
        </mask>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.0006 8.99316L11.25 10.5L10.1904 9.98229"
          fill={fill}
        />
        <path
          d="M11.25 10.5L11.0305 10.9492L11.9016 11.3748L11.7433 10.4183L11.25 10.5ZM10.5073 9.07481L10.7567 10.5816L11.7433 10.4183L11.4939 8.91152L10.5073 9.07481ZM11.4695 10.0507L10.4099 9.53304L9.97094 10.4315L11.0305 10.9492L11.4695 10.0507Z"
          fill={fill}
          mask="url(#path-2-inside-1_1_46510)"
        />
        <path
          d="M11.0006 8.99316L11.25 10.5L10.1904 9.98229"
          stroke={stroke}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10.5073 9.59542C10.5383 9.62079 10.5666 9.6503 10.5916 9.68384C10.7564 9.90538 10.7105 10.2186 10.4889 10.3835C9.96853 10.7707 9.32283 11 8.625 11C6.89911 11 5.5 9.60089 5.5 7.875C5.5 6.14911 6.89911 4.75 8.625 4.75C10.3509 4.75 11.75 6.14911 11.75 7.875C11.75 8.35018 11.6436 8.80192 11.4528 9.20647C11.335 9.45623 11.0371 9.56322 10.7873 9.44544C10.7494 9.42755 10.7148 9.4055 10.6837 9.3801L10.5073 9.59542ZM9.42188 7.69998C9.18887 7.69998 9 7.5097 9 7.27498C9 7.04025 9.18887 6.84998 9.42188 6.84998C9.65487 6.84998 9.84375 7.04025 9.84375 7.27498C9.84375 7.5097 9.65487 7.69998 9.42188 7.69998ZM7.3125 7.27498C7.3125 7.5097 7.50137 7.69998 7.73438 7.69998C7.96738 7.69998 8.15625 7.5097 8.15625 7.27498C8.15625 7.04025 7.96738 6.84998 7.73438 6.84998C7.50137 6.84998 7.3125 7.04025 7.3125 7.27498Z"
          fill={fill}
        />
      </svg>
    );
  };

  const TriangleIcon = ({
    width,
    height,
    className,
    variant,
    stroke,
    fill = "#596780",
  }: IconProps) => {
    return (
      <svg
        width="12"
        height="13"
        viewBox="0 0 12 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.32006 6.07009L5.86742 8.61741C5.94065 8.69064 6.05936 8.69064 6.13259 8.61741L8.67988 6.07009C8.798 5.95196 8.71438 5.75 8.54728 5.75H3.45265C3.2856 5.75 3.20195 5.95197 3.32006 6.07009Z"
          fill={fill}
        />
      </svg>
    );
  };

  const SwapIcon = ({
    width,
    height,
    className,
    variant,
    stroke,
    fill,
  }: IconProps) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.16051 3.83577L7.16051 17.4536"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.08273 7.93188L7.1605 3.83522L11.2383 7.93188"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.0887 20.1671L17.0887 6.54934"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21.1665 16.071L17.0887 20.1677L13.0109 16.071"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };

  const GasStationIcon = ({
    width,
    height,
    className,
    variant,
    stroke,
    fill = "#90A3BF",
  }: IconProps) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.34 9.33L20.34 8.33C19.97 8.15 19.51 8.29 19.33 8.66C19.14 9.04 19.29 9.49 19.66 9.67L21.25 10.46V15.25L17.5 15.26V5C17.5 3 16.16 2 14.5 2H6.5C4.84 2 3.5 3 3.5 5V21.25H2C1.59 21.25 1.25 21.59 1.25 22C1.25 22.41 1.59 22.75 2 22.75H19C19.41 22.75 19.75 22.41 19.75 22C19.75 21.59 19.41 21.25 19 21.25H17.5V16.76L22 16.75C22.42 16.75 22.75 16.41 22.75 16V10C22.75 9.72 22.59 9.46 22.34 9.33ZM6 6.89C6 5.5 6.85 5 7.89 5H13.12C14.15 5 15 5.5 15 6.89V8.12C15 9.5 14.15 10 13.11 10H7.89C6.85 10 6 9.5 6 8.11V6.89ZM6.5 12.25H9.5C9.91 12.25 10.25 12.59 10.25 13C10.25 13.41 9.91 13.75 9.5 13.75H6.5C6.09 13.75 5.75 13.41 5.75 13C5.75 12.59 6.09 12.25 6.5 12.25Z"
          fill={fill}
        />
      </svg>
    );
  };

  const ManualCarIcon = ({
    width,
    height,
    className,
    variant,
    stroke,
    fill = "#90A3BF",
  }: IconProps) => {
    return (
      <svg
        fill="none"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.47-10-10-10z"
          fill={fill}
        />
        <rect fill="#fff" height="16" rx="8" width="16" x="4" y="4" />
        <path
          d="m12 6c-3.312 0-6 2.688-6 6s2.688 6 6 6 6-2.688 6-6-2.682-6-6-6z"
          fill="#90a3bf"
        />
        <rect fill="#fff" height="8" rx="4" width="8" x="8" y="8" />
        <g fill="#90a3bf">
          <path d="m11 17h2v4h-2z" />
          <path d="m17 11h4v2h-4z" />
          <path d="m3 11h4v2h-4z" />
        </g>
      </svg>
    );
  };

  const TwoUserIcon = ({
    width,
    height,
    className,
    variant,
    stroke,
    fill = "#90A3BF",
  }: IconProps) => {
    return (
      <svg
        fill="none"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill={fill}>
          <path d="m9 2c-2.62 0-4.75 2.13-4.75 4.75 0 2.57 2.01 4.65 4.63 4.74.08-.01.16-.01.22 0h.05.02c2.56-.09 4.57-2.17 4.58-4.74 0-2.62-2.13-4.75-4.75-4.75z" />
          <path d="m14.08 14.1499c-2.79-1.86-7.34001-1.86-10.15001 0-1.27.85-1.97 2-1.97 3.23s.7 2.37 1.96 3.21c1.4.94 3.24 1.41 5.08 1.41 1.84001 0 3.68001-.47 5.08001-1.41 1.26-.85 1.96-1.99 1.96-3.23-.01-1.23-.7-2.37-1.96-3.21z" />
          <path d="m19.99 7.3401c.16 1.94-1.22 3.64-3.13 3.87-.01 0-.01 0-.02 0h-.03c-.06 0-.12 0-.17.02-.97.05-1.86-.26-2.53-.83 1.03-.92 1.62-2.3 1.5-3.8-.07-.81-.35-1.55-.77-2.18.38-.19.82-.31 1.27-.35 1.96-.17 3.71 1.29 3.88 3.27z" />
          <path d="m21.99 16.5899c-.08.97-.7 1.81-1.74 2.38-1 .55-2.26.81-3.51.78.72-.65 1.14-1.46 1.22-2.32.1-1.24-.49-2.43-1.67-3.38-.67-.53-1.45-.95-2.3-1.26 2.21-.64 4.99-.21 6.7 1.17.92.74 1.39 1.67 1.3 2.63z" />
        </g>
      </svg>
    );
  };

  const CheckboxIcon = ({
    width,
    height,
    className,
    variant,
    stroke,
    fill = "#3563E9",
  }: IconProps) => {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.19 0H5.81C2.17 0 0 2.17 0 5.81V14.18C0 17.83 2.17 20 5.81 20H14.18C17.82 20 19.99 17.83 19.99 14.19V5.81C20 2.17 17.83 0 14.19 0ZM14.78 7.7L9.11 13.37C8.97 13.51 8.78 13.59 8.58 13.59C8.38 13.59 8.19 13.51 8.05 13.37L5.22 10.54C4.93 10.25 4.93 9.77 5.22 9.48C5.51 9.19 5.99 9.19 6.28 9.48L8.58 11.78L13.72 6.64C14.01 6.35 14.49 6.35 14.78 6.64C15.07 6.93 15.07 7.4 14.78 7.7Z"
          fill={fill}
        />
      </svg>
    );
  };

  return {
    Logo,
    SearchIcon,
    FilterIcon,
    HeartIcon,
    NotificationIcon,
    SettingsIcon,
    WebChatIcon,
    TriangleIcon,
    SwapIcon,
    GasStationIcon,
    ManualCarIcon,
    TwoUserIcon,
    CheckboxIcon,
  };
};
