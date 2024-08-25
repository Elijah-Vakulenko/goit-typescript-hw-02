import React, { useState, ChangeEvent, FormEvent } from "react";
import s from "./SearchBar.module.css";
import { Toaster } from "react-hot-toast";
import { showError } from "../../services/toaster";
import { FaSearch } from 'react-icons/fa';

interface SearchBarProps {
  onSubmit: (query: string) => void; 
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const [topic, setTopic] = useState<string>("");

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (topic.trim() === "") {
      showError("Please enter a search query");
      return;
    }
    onSubmit(topic);
    console.log(topic);
  };

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setTopic(evt.target.value);
  };

  return (
    <header className={s.searchbar}>
      <a className={s.logo} href="">ImageNation IV</a>
      <form className={s.searchform} onSubmit={handleSubmit}>
        <input
          type="text"
          name="topic"
          value={topic}
          onChange={handleChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          className={s.input}
        />
        <Toaster />
        <button className={s.btn} type="submit">
          <FaSearch />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
