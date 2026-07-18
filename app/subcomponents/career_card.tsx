import React from "react";

interface CareerCardProp {
    key: number;
    icon: React.ReactNode;
    companyName: string;
    jobTitle: string;
    subTitle: string;
    employmentDate: string;
    summary1: string;
    summary2: string;
    summary3: string;
    summary4: string;
    summary5: string;
    summary6: string;
}

export default function CareerCard({
    key,
    icon,
    companyName,
    jobTitle,
    subTitle,
    employmentDate,
    summary1,
    summary2,
    summary3,
    summary4,
    summary5,
    summary6
}: CareerCardProp) {
    return (
        <div className="flex flex-col w-175 gap-2 border-2 p-10 rounded-[5]" key={key}>
            <h3 className="text-xl font-bold tracking-tight flex items-center gap-6">
                {icon}
                {companyName}
            </h3>
            <h4 className="text-lg font-normal">
                {jobTitle}
            </h4>

            <p className="text-base font-normal">
                {subTitle}
            </p>

            <p className="text-base font-normal">
                {employmentDate}
            </p>

            <ul className="flex flex-col gap-2">
                <li className="text-sm">
                    {summary1}
                </li>
                <li className="text-sm">
                    {summary2}
                </li>
                <li className="text-sm">
                    {summary3}
                </li>
                <li className="text-sm">
                    {summary4}
                </li>
                <li className="text-sm">
                    {summary5}
                </li>
                <li className="text-sm">
                    {summary6}
                </li>
            </ul>
        </div>
    );
};