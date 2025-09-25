import Image from 'next/image';

export default function AboutMe() {
  return (
    <div>
      <h1 className="font-sans">About me</h1>
      <Image
        src="/images/Iceland1-2000.webp"
        alt="Kasia's photo"
        width={500}
        height={500}
      />
      <p>
        Hi, I’m Katarzyna Dziewicka — a frontend-leaning software engineer with
        a strong full-stack foundation and a passion for building products that
      </p>
      <p>
        What excites me most is the intersection of technology, people, and
        purpose: Users first – I thrive in organizations where feedback loops
        are short, and I can see the impact of my work directly in users’ hands.
        Continuous improvement – I value good engineering practices, mentorship,
        and knowledge-sharing, and I’m committed to building resilient,
        maintainable software. Impactful domains – I’m particularly drawn to
        healthtech, smart cities, and other areas where technology drives
        positive change. Beyond code, I mentor with IT Girls Foundation, helping
        young women take their first steps into tech. I also keep balance
        through running, yoga, and painting — whether I’m finishing a
        half-marathon or creating something colorful on canvas. I’m looking for
        opportunities to contribute to innovative, purpose-driven teams where I
        can bring together my technical expertise, product thinking, and passion
        for meaningful impact.
      </p>
      <p>
        I started my career in anthropology at UCL, where I developed a deep
        curiosity about people and systems. That curiosity naturally evolved
        into software engineering, where I could combine problem-solving with
        creativity to design digital products that improve lives. Since then,
        I’ve worked across fast-paced startups and global biotech, contributing
        to user-centric, scalable solutions — from developing design systems at
        an AI scale-up to delivering impactful tools at Cytiva.
      </p>
    </div>
  );
}
