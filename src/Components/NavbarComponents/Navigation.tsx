import { Navigator } from "../../Navigator";

interface Props {
  navigator: Navigator[];
}

const Navigation = ({ navigator }: Props) => {
  return (
    <ul className="flex flex-row gap-5">
      {navigator.map((item) => (
        <li key={item.name}>
          <a href={item.navigate}>{item.name}</a>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
