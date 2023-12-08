interface Props {
  width?: number
  height?: number
  color?: string
}

function IconBuilding({ width, height, color }: Props) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M35.4167 14.1667C35.4167 11.8259 35.4167 10.6555 34.8549 9.81478C34.6117 9.45081 34.2992 9.13831 33.9352 8.89511C33.1999 8.40375 32.2123 8.34217 30.41 8.33445C30.4168 8.82011 30.4167 9.3276 30.4167 9.85086L30.4167 10V12.0833H32.0833C32.7737 12.0833 33.3333 12.643 33.3333 13.3333C33.3333 14.0237 32.7737 14.5833 32.0833 14.5833H30.4167V17.0833H32.0833C32.7737 17.0833 33.3333 17.643 33.3333 18.3333C33.3333 19.0237 32.7737 19.5833 32.0833 19.5833H30.4167V22.0833H32.0833C32.7737 22.0833 33.3333 22.643 33.3333 23.3333C33.3333 24.0237 32.7737 24.5833 32.0833 24.5833H30.4167V35.4167H27.9167V10C27.9167 6.85731 27.9167 5.28597 26.9404 4.30965C25.9641 3.33334 24.3927 3.33334 21.25 3.33334H17.9167C14.774 3.33334 13.2026 3.33334 12.2263 4.30965C11.25 5.28597 11.25 6.85731 11.25 10V35.4167H8.75V24.5833H7.08334C6.39298 24.5833 5.83334 24.0237 5.83334 23.3333C5.83334 22.643 6.39298 22.0833 7.08334 22.0833H8.75V19.5833H7.08334C6.39298 19.5833 5.83334 19.0237 5.83334 18.3333C5.83334 17.643 6.39298 17.0833 7.08334 17.0833H8.75V14.5833H7.08334C6.39298 14.5833 5.83334 14.0237 5.83334 13.3333C5.83334 12.643 6.39298 12.0833 7.08334 12.0833H8.75V10L8.74999 9.85085C8.74993 9.32759 8.74987 8.8201 8.75672 8.33445C6.95437 8.34217 5.96681 8.40375 5.23144 8.89511C4.86747 9.13831 4.55497 9.45081 4.31177 9.81478C3.75001 10.6555 3.75001 11.8259 3.75001 14.1667V35.4167H2.91667C2.22632 35.4167 1.66667 35.9763 1.66667 36.6667C1.66667 37.357 2.22632 37.9167 2.91667 37.9167H36.25C36.9404 37.9167 37.5 37.357 37.5 36.6667C37.5 35.9763 36.9404 35.4167 36.25 35.4167H35.4167V14.1667ZM15 19.5833C15 18.893 15.5596 18.3333 16.25 18.3333H22.9167C23.607 18.3333 24.1667 18.893 24.1667 19.5833C24.1667 20.2737 23.607 20.8333 22.9167 20.8333H16.25C15.5596 20.8333 15 20.2737 15 19.5833ZM15 24.5833C15 23.893 15.5596 23.3333 16.25 23.3333H22.9167C23.607 23.3333 24.1667 23.893 24.1667 24.5833C24.1667 25.2737 23.607 25.8333 22.9167 25.8333H16.25C15.5596 25.8333 15 25.2737 15 24.5833ZM19.5833 30.4167C20.2737 30.4167 20.8333 30.9763 20.8333 31.6667V35.4167H18.3333V31.6667C18.3333 30.9763 18.893 30.4167 19.5833 30.4167ZM15 10.4167C15 9.72632 15.5596 9.16668 16.25 9.16668H22.9167C23.607 9.16668 24.1667 9.72632 24.1667 10.4167C24.1667 11.107 23.607 11.6667 22.9167 11.6667H16.25C15.5596 11.6667 15 11.107 15 10.4167ZM15 15.4167C15 14.7263 15.5596 14.1667 16.25 14.1667H22.9167C23.607 14.1667 24.1667 14.7263 24.1667 15.4167C24.1667 16.107 23.607 16.6667 22.9167 16.6667H16.25C15.5596 16.6667 15 16.107 15 15.4167Z"
        fill={color ? color : '#343E4C'}
      />
    </svg>
  )
}

export default IconBuilding