import { ReactNode } from "react";

export const Information = ({ children }: { children: ReactNode }) => {
  return (
    <div
      style={{
        backgroundColor: "lavender",
        borderRadius: 4,
        color: "darkslateblue",
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: 1200,
        paddingBottom: 16,
        paddingLeft: 24,
        paddingRight: 24,
        paddingTop: 16,
      }}
    >
      <p
        style={{
          fontSize: 14,
          fontWeight: 500,
          lineHeight: 20 / 14,
          margin: 0,
        }}
      >
        {children}
      </p>
    </div>
  );
};
