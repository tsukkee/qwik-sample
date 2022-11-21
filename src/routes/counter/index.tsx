import { component$, useStore, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./counter.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  const count = useStore({
    data: 10,
  });

  return (
    <>
      <input type="button" value="-" onClick$={() => count.data--} />
      <input type="button" value="+" onClick$={() => count.data++} />
      <div className="count">{count.data}</div>
    </>
  );
});
