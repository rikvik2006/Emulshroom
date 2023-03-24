import { StaticImageData } from "next/image";

export type PageInfos = {
    page: string;
    header: HeaderProps
}

export type HeaderProps = {
    logo: StaticImageData[];
    color: string[];

}

