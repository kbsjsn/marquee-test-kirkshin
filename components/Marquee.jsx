import './Marquee.scss';

export default function Marquee({ headline, subhead, cta }) {
  return (
    <div className="marquee">
      <div className="headline-sub">
        <h2 className="headline">{ headline }</h2>
        <h3 className="subhead">{ subhead }</h3>
      </div>
      <div className="cta-container">
        <h3 className="cta-content">{ cta }</h3>
        <a href="/" title="Let's talk" className="lets-talk">
          Let's talk.&nbsp;&nbsp;&nbsp;<span>→</span>
        </a>
      </div>
    </div>
  )
}