export const useToggleList = (data, initialCount) => {
    const [showAll, setShowAll] = useState(false);
    const toggle = () => setShowAll((prev) => !prev);
    const displayed = showAll ? data : data.slice(0, initialCount);
    return { displayed, showAll, toggle };
  };
  