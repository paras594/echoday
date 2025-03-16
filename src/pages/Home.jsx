import { GridLayout, GridLayoutItem } from "@progress/kendo-react-layout";
import { HomeHeader } from "../components/home-header";
import { Navbar } from "../components/navbar";
import { CalendarBlock } from "../components/calendar-block";
import { AboutMyDayBlock } from "../components/about-my-day-block";
import { TodosBlock } from "../components/todos-block";
import { NotesBlock } from "../components/notes-block";
import { RemindersBlock } from "../components/reminders-block";
import { MemoriesBlock } from "../components/memories-block";
import { DialogsContainer } from "../components/dialogs-container";
import { useAppStore } from "../store/use-app-store";

import "../styles/home-page.scss";

function generate12ColGrid() {
  const cols = [];

  for (let i = 0; i < 12; i++) {
    cols.push({ width: "1fr" });
  }

  return cols;
}

function Home() {
  const { setActiveDialog } = useAppStore((state) => state);

  return (
    <div>
      <Navbar />
      <div className="container main">
        <HomeHeader />
        <div style={{ height: "28px" }} />
        <GridLayout
          cols={generate12ColGrid()}
          rows={[{ height: 370 }, { height: 370 }]}
          gap={{ cols: 20, rows: 20 }}
        >
          <GridLayoutItem colSpan={5}>
            <CalendarBlock />
          </GridLayoutItem>
          <GridLayoutItem colSpan={4}>
            <AboutMyDayBlock />
          </GridLayoutItem>
          <GridLayoutItem colSpan={3}>
            <TodosBlock onActionClick={() => setActiveDialog("add-todo")} />
          </GridLayoutItem>
          <GridLayoutItem colSpan={4}>
            <NotesBlock />
          </GridLayoutItem>
          <GridLayoutItem colSpan={3}>
            <RemindersBlock />
          </GridLayoutItem>
          <GridLayoutItem colSpan={5}>
            <MemoriesBlock />
          </GridLayoutItem>
        </GridLayout>
      </div>
      <DialogsContainer />
      <div style={{ height: "80px" }} />
    </div>
  );
}

export default Home;
