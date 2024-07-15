import React, { useState } from "react";
import YouTube from "react-youtube";
import Table from "./table.js";
import Apidata from "./Apidata.js";
import myImage from "./images/myImage.jpeg";
import myImage2 from "./images/myImage2.webp";
import myImage3 from "./images/myImage3.webp";
import myImage4 from "./images/myImage4.webp";

function Content() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    {
      src: myImage2,
      alt: "Image 1",
    },
    {
      src: myImage3,
      alt: "Image 2",
    },
    {
      src: myImage4,
      alt: "Image 3",
    },
    // Add more image objects as needed
  ];
  const changeImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const opts = {
    height: "350",
    width: "550",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return (
    <div className="main-content">
      <h1>Artificial Intelligence</h1> <br />
      <img src={myImage} alt="My Image" width={620} height={300} />
      <p>
        Artificial Intelligence (AI) stands at the forefront of modern
        technological advancement, revolutionizing industries, reshaping
        economies, and redefining the very fabric of human existence. From
        intelligent virtual assistants to self-driving cars, AI has transcended
        the realm of science fiction to become an integral part of our daily
        lives. In this article, we delve into the multifaceted landscape of AI,
        exploring its capabilities, implications, and the unprecedented
        opportunities it presents for humanity.
      </p>
      <h3>The Evolution of AI</h3>
      <p>
        The journey of AI traces back to the mid-20th century when pioneers like
        Alan Turing laid the theoretical groundwork for intelligent machines.
        Over the decades, advancements in computational power, algorithms, and
        data availability propelled AI from its nascent stages to the forefront
        of innovation. From rule-based systems and expert systems to machine
        learning and deep learning, AI has undergone a remarkable evolution,
        enabling machines to perceive, reason, and learn in ways once thought
        impossible.
      </p>
      <h3>Applications Across Industries</h3>
      <p>
        The impact of AI transcends industry boundaries, permeating sectors
        ranging from healthcare and finance to transportation and entertainment.
        In healthcare, AI-driven diagnostics enhance disease detection and
        personalized treatment plans, while in finance, algorithmic trading
        algorithms optimize investment strategies and risk management.
        Transportation is undergoing a paradigm shift with autonomous vehicles
        promising safer and more efficient mobility solutions, while the
        entertainment industry leverages AI for content recommendation and
        personalized experiences.
      </p>
      <div>
        <img
          src={images[currentImageIndex].src}
          alt={images[currentImageIndex].alt}
          height={350}
          width={600}
        />
        <br />
        <div id="image-buttons">
          {/* Button to change the image */}
          <button onClick={changeImage} className="btn btn-info ">
            Change Image
          </button>
        </div>
      </div>
      <br></br>
      <h3>Challenges and Ethical Considerations</h3>
      <p>
        Despite its immense potential, AI poses significant challenges and
        ethical dilemmas. Concerns regarding job displacement due to automation,
        algorithmic biases perpetuating social inequalities, and the existential
        risks associated with superintelligent AI loom large. Ensuring the
        responsible development and deployment of AI necessitates robust
        governance frameworks, transparent algorithms, and interdisciplinary
        collaboration to address these ethical concerns and mitigate potential
        risks.
      </p>
      <br />
      <h3>Empowering Human-AI Collaboration</h3>
      <p>
        Rather than viewing AI as a replacement for human capabilities,
        embracing a collaborative paradigm holds the key to unlocking its full
        potential. Human-AI collaboration augments human intelligence,
        empowering individuals to tackle complex problems more effectively and
        creatively. Whether in scientific research, artistic expression, or
        societal challenges, synergistic interactions between humans and AI
        catalyze innovation and drive progress towards shared goals.
      </p>
      {/* //video  */}
      <YouTube
        videoId="https://www.youtube.com/watch?v=JeU_EYFH1Jk&pp=ygUfd2hhdCBpcyBhcnRpZmljaWFsIGludGVsbGlnZW5jZQ%3D%3D"
        opts={opts}
      />
      <h3>The Future Landscape</h3>
      <p>
        Looking ahead, the future of AI is both promising and uncertain.
        Breakthroughs in areas such as reinforcement learning, natural language
        processing, and neural interfaces herald a new era of AI capabilities.
        Yet, navigating ethical, legal, and societal implications will be
        paramount to ensuring that AI serves the collective good. As AI
        continues to evolve, fostering a culture of responsible innovation,
        diversity, and inclusivity will be imperative in shaping a future where
        AI augments human potential and fosters sustainable progress.
      </p>
      <h3>Exploring the Impact of Artificial Intelligence</h3>
      <p>
        Artificial Intelligence (AI) stands as a transformative force reshaping
        industries and societies worldwide. Delving into key statistics provides
        insights into the scale, growth, and implications of AI adoption across
        various sectors.
      </p>
      <Table />
      <br />
      <br />
      <br />
      <p>
        <strong> Global AI Market Size:</strong> The AI market is experiencing
        rapid expansion, with projections indicating a substantial increase in
        its value. Estimated to soar to $190.61 billion by 2025, this growth
        reflects the widespread integration of AI technologies across diverse
        sectors, from healthcare to finance.
      </p>
      <p>
        <strong> AI Job Growth: </strong>As AI permeates industries, it
        catalyzes job creation on a significant scale. Projections suggest that
        by 2022, AI will generate approximately 58 million new jobs,
        underscoring its role as a driver of economic growth and employment
        opportunities.
      </p>
      <p>
        <strong>AI Adoption Rate:</strong> Organizations worldwide are
        increasingly embracing AI to enhance efficiency, innovation, and
        competitiveness. With 37% of organizations already implementing AI in
        various capacities, this trend underscores the pervasive influence of AI
        across business landscapes.
      </p>
      <p>
        <strong> AI Patent Activity:</strong> The rapid pace of AI innovation is
        evident in the robust patent activity surrounding AI-related
        technologies. Over 360,000 AI-related patent applications have been
        filed globally since 2010, highlighting the intense competition and
        intellectual property landscape in the AI domain.
      </p>
      <p>
        <strong>Healthcare:</strong> AI's impact on healthcare is profound, with
        the market poised to reach $45.2 billion by 2026. From predictive
        analytics to personalized medicine, AI-driven solutions hold the promise
        of revolutionizing patient care, diagnosis, and treatment outcomes.
      </p>
      <p>
        <strong> Finance: </strong>The financial sector is undergoing a seismic
        transformation fueled by AI, with 75% of executives anticipating
        fundamental industry changes. AI-powered algorithms optimize risk
        management, fraud detection, and investment strategies, driving
        operational efficiency and customer experiences.
      </p>
      <br></br>
      <Apidata />
    </div>
  );
}

export default Content;
