function InstagramIcon() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
    >
      <defs>

        <linearGradient
          id="instagramGradient"
          x1="0%"
          y1="100%"
          x2="100%"
          y2="0%"
        >

          <stop offset="0%" stopColor="#FEDA75" />

          <stop offset="25%" stopColor="#FA7E1E" />

          <stop offset="50%" stopColor="#D62976" />

          <stop offset="75%" stopColor="#962FBF" />

          <stop offset="100%" stopColor="#4F5BD5" />

        </linearGradient>

      </defs>

      <rect

        x="2"

        y="2"

        width="20"

        height="20"

        rx="6"

        stroke="url(#instagramGradient)"

        strokeWidth="2"

      />

      <circle

        cx="12"

        cy="12"

        r="4.5"

        stroke="url(#instagramGradient)"

        strokeWidth="2"

      />

      <circle

        cx="17.3"

        cy="6.7"

        r="1.2"

        fill="url(#instagramGradient)"

      />

    </svg>
  );
}

export default InstagramIcon;