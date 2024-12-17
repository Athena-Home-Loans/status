import { ModeButton } from "../components/ModeButton";
import { useGoToHash } from "../hooks/useGoToHash";

export const Header = () => {
  const goToHash = useGoToHash();
  return (
    <header
      style={{
        alignItems: "center",
        display: "flex",
        flexWrap: "wrap",
        gap: 32,
        justifyContent: "space-between",
      }}
    >
      <a
        title="Athena Status Page"
        href="/athena-status-page/"
        style={{ display: "block", height: 43, minWidth: 49, width: 49 }}
      >
        <svg
          width="49"
          height="43"
          viewBox="0 0 490 427"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_601_48"
            style="mask-type:luminance"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="490"
            height="427"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.0595703 0.790039H489.253V426.94H0.0595703V0.790039Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask0_601_48)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M305.794 287.682V287.68L299.178 0.790039L244.023 313.61L309.001 427L305.794 287.682Z"
              fill="#B40000"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M489.253 427L299.178 0.790039L309.001 427H489.253Z"
              fill="#FF0001"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M299.178 0.790039L-0.000427246 427H224.028L299.178 0.790039Z"
              fill="#FF009F"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M170.118 184.65L309 427H489.252L170.118 184.65Z"
              fill="#B40000"
            />
          </g>
        </svg>
      </a>
      <nav>
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            gap: 16,
            margin: 0,
            padding: 0,
          }}
        >
          <li style={{ display: "block" }}>
            <a
              href="#/"
              onClick={goToHash}
              style={{
                display: "block",
                lineHeight: 20 / 16,
                padding: 16,
                textDecoration: "none",
              }}
            >
              External
            </a>
          </li>
          <li style={{ display: "block" }}>
            <a
              href="#/internal/"
              onClick={goToHash}
              style={{
                display: "block",
                lineHeight: 20 / 16,
                padding: 16,
                textDecoration: "none",
              }}
            >
              Internal
            </a>
          </li>
          <li style={{ display: "block" }}>
            <ModeButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};
