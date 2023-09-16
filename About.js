const About = ({ isEven, foolsDay }) => (
	<>
		<h2 style={{ fontSize: 20, marginTop: 50, marginBottom: 10 }}>About</h2>
		<div className="oddeven-about">
			<p className="oddeven-paragraph">
				A simple website to help you better understand which side of the street
				to be parked on in Syracuse, NY. The{" "}
				<a href="https://syr.gov/">city of Syracuse</a> uses odd even parking,
				or{" "}
				<a href="https://en.wikipedia.org/wiki/Alternate-side_parking">
					alternative-side parking
				</a>
				, to make sure snowplows and street-sweepers have access on narrow
				roads.
			</p>
			<p className="oddeven-paragraph">
				<span id="parking-info-side">{isEven ? "Even" : "Odd"}</span> side
				parking means you should be on the side of the street with addresses
				like{" "}
				<span id="parking-info-address">
					{isEven ? "1024, 312, or 658" : "1023, 313, or 657"}
				</span>
				. For more information, visit{" "}
				<a href="https://www.syr.gov/Departments/PVB/Parking-Rules">
					Syracuse's Parking FAQ
				</a>
				.
			</p>
			{foolsDay && (
				<p className="oddeven-paragraph">
					What's a fools day? There are some exceptions to this rule, sometimes
					referred to as "fool's days". These are instances at the end of some
					months in which an odd day is immediately followed by another odd day.
					Throughout the year, these fool's days fall on January 1, February 1,
					April 1, June 1, August 1, September 1, and November 1. On leap years,
					March 1 is also a fool's day.
				</p>
			)}
			<footer className="oddeven-footer">
				<p className="oddeven-paragraph">
					This website is unofficial and not related in any manner to the city
					government of Syracuse, NY. There is no guarantee of accuracy because
					date math is hard. Current repo available on{" "}
					<a href={"https://github.com/maxmatthews/oddeven-react"}>GitHub</a>.
					Original credit goes to{" "}
					<a href={"https://github.com/philipbordallo/oddeven"}>
						philipbordallo/oddeven
					</a>
					.
				</p>
			</footer>
		</div>
	</>
);

export default About;
