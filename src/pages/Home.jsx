import { GridLayout, GridLayoutItem } from "@progress/kendo-react-layout";
import { HomeHeader } from "../components/home-header";
import { Navbar } from "../components/navbar";
import { CalendarBlock } from "../components/calendar-block";

import "../styles/home-page.scss";

function generate12ColGrid() {
  const cols = [];

  for (let i = 0; i < 12; i++) {
    cols.push({ width: "1fr" });
  }

  return cols;
}

function Home() {
  return (
    <div>
      <Navbar />
      <div className="container main">
        <HomeHeader />
        <div style={{ height: "28px" }} />
        <GridLayout cols={generate12ColGrid()} gap={{ rows: 24, cols: 24 }}>
          <GridLayoutItem colSpan={5}>
            <CalendarBlock />
          </GridLayoutItem>
          <GridLayoutItem>1</GridLayoutItem>
          <GridLayoutItem>1</GridLayoutItem>
        </GridLayout>
        {/* <GridLayout cols={generate12ColGrid()}>
          <GridLayoutItem>1</GridLayoutItem>
          <GridLayoutItem>1</GridLayoutItem>
          <GridLayoutItem>1</GridLayoutItem>
        </GridLayout> */}
      </div>
    </div>
  );
}

export default Home;
