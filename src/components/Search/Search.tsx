import { ISearch } from "./Search.props";
import styles from "./Search.module.css";
import cn from "classnames";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import SearchIco from "./search.svg";
import { KeyboardEvent, useState } from "react";
import { useRouter } from "next/router";

export const Search = ({ className, ...props }: ISearch): JSX.Element => {
  const [search, setSearch] = useState<string>("");
  const router = useRouter();

  const handleSearch = () => {
    if (search.trim() === "") {
      setSearch("Nothing to find");
      return;
    }
    router.push({
      pathname: "/search",
      query: {
        q: search.trim(),
      },
    });
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className={cn(className, styles.search)} {...props}>
      <Input className={styles.input} placeholder="Search" value={search} onChange={e => setSearch(e.target.value)} onKeyDown={handleKeyDown} />
      <Button appearence="primary" className={styles.button} onClick={handleSearch}>
        <SearchIco />
      </Button>
    </div>
  );
};
