import { Image } from "@nextui-org/react";

export function ApplicationLogo(props) {
    return (
        <Image
            style={{ imageRendering: "auto" }}
            src="/assets/logo/bb.png"
            alt="logo bluebear"
            width="180"
            height="180"
        />
    );
}
