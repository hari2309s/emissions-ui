import styles from './page.module.css';

export default async function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.card}>
        <p>
          <b>The European Space Agency’s Sentinel-5P satellite</b> is built to monitor air quality data (
          <i>carbon hydroxide, sulfur monoxide, ozone, …</i>). All data gathered are publicly available.
        </p>
        <br />
        <p>
          <b>Emissions API</b>’s mission is to provide easy access to this data without the need of being an expert in
          satellite data analysis and without having to process terabytes of data.
        </p>
        <br />
        <p>
          Achievements of climate goals are so far only verifiable for a very small group of people with specialized
          know-how. As a result, public discussion remains abstract and elusive for many people. Easy access to
          emissions data provides a more general audience with the opportunity to form a fact-based opinion. For
          example, one could evaluate the effectiveness of environmental regulations – such as diesel driving bans in
          inner cities or new sulfur limits in shipping–by comparing actual measurements from before and after on a map.
        </p>
        <br />
        <p>
          This is just an UI based on the data from the Emissions API showcasing different toxic products in the
          atmosphere and graphs showing daily average of emissions for countries. For more information, take a look at
          <a href="https://emissions-api.org/" rel="noopener noreferrer" target="_blank">
            {` Emissions API `}
          </a>
          - underlying core project.
        </p>
      </div>
    </main>
  );
}
