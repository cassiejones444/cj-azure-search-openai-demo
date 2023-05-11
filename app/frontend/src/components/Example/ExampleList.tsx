import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "What has been the profit or loss reported?",
        value: "What has been the profit or losses repoorted?"
    },
    { text: "What global frameworks and commitments are there?", value: "What global frameworks and commitments are there?" },
    { text: "What does the Qantas fleet consist of?", value: "What does the Qantas fleet consist of?" }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
