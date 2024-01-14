import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/cataract.css'; // You can reuse the same CSS styles

function CataractSurgery() {
  return (
    <div>
      <div className="title4">
        <h1 className="title-content4">Cataract Surgery</h1>
      </div>
      <div className="cataract-content">
        <p style={{ fontSize: '25px', color: '' }}>
          <b>
            <i>
              Cataract surgery is a medical procedure performed to remove
              cataracts, which are cloudy areas in the lens of the eye that
              result in vision impairment.
            </i>
          </b>
        </p>
        <p>
          <strong style={{ fontSize: '20px' }}>What is cataract surgery?</strong>
        </p>
        <p>
          Cataract surgery is a common surgical procedure that involves
          replacing the clouded natural lens of the eye with an artificial lens.
          This procedure aims to restore clear vision for individuals affected
          by cataracts.
        </p>
        <br />
        <p>
          <strong style={{ fontSize: '20px' }}>Why do I need cataract surgery?</strong>
        </p>
        <ul>
          <li>
            To improve vision when cataracts cause blurred or cloudy vision.
          </li>
          <li>
            To enhance quality of life, reduce glare, and improve nighttime
            vision.
          </li>
          <li>To regain the ability to perform daily tasks independently.</li>
        </ul>
        <br />
        <p>
          <strong style={{ fontSize: '20px' }}>How does it work?</strong>
        </p>
        <ol>
          <li>
            The surgeon creates a small incision in the eye to access the
            cataract.
          </li>
          <li>
            The clouded lens is broken apart and removed, usually using
            phacoemulsification.
          </li>
          <li>
            An artificial intraocular lens (IOL) is implanted to replace the
            natural lens.
          </li>
          <li>
            The incision is closed, and no sutures are required.
          </li>
        </ol>
        <br />
        <p>
          <strong style={{ fontSize: '20px' }}>Risks and complications include:</strong>
        </p>
        <ul>
          <li>Common surgical risks like infection and bleeding.</li>
          <li>Retinal detachment or dislocation of the IOL (rare).</li>
          <li>Increased intraocular pressure (glaucoma risk).</li>
          <li>Posterior capsule opacification (clouding of the IOL, treatable).</li>
        </ul>
        <br />
        <p>
          <strong style={{ fontSize: '20px' }}>Recovery time:</strong>
        </p>
        <p>
          Most patients experience improved vision within a few days, but full
          recovery can take several weeks. Follow post-operative care
          instructions diligently.
        </p>
        <br />
        <p>
          <strong style={{ fontSize: '20px' }}>Cost:</strong>
        </p>
        <p>
          The cost of cataract surgery can vary based on factors like the type
          of IOL used, location, and insurance coverage. Costs typically range
          from $3,000 to $5,000 per eye.
        </p>
        <br />
        <p>
          <strong style={{ fontSize: '20px' }}>
            What else can I expect during my appointment?
          </strong>
        </p>
        <p>
          Your cataract surgery consultation will include discussions about the
          procedure, the selection of IOLs, and the expected outcomes. Detailed
          eye examinations may be performed.
        </p>
        <br />
        <p>
          <strong style={{ fontSize: '20px' }}>
            Can I bring someone with me for support?
          </strong>
        </p>
        <p>
          Having a family member or friend accompany you for support during the
          procedure and transportation home is recommended.
        </p>
        <br />
        <p>
          <strong style={{ fontSize: '20px' }}>Is this a routine procedure?</strong>
        </p>
        <p>
          Cataract surgery is a common and well-established procedure for
          treating cataracts, and it is typically performed when cataracts
          affect an individual's vision.
        </p>
        <br />
        <p>
          <strong style={{ fontSize: '20px' }}>
            Do I need to make any dietary restrictions?
          </strong>
        </p>
        <p>
          In most cases, no specific dietary restrictions are required before or
          after cataract surgery. Follow the surgeon's advice.
        </p>
        <br />
        <p>
          <strong style={{ fontSize: '20px' }}>
            How long do I need to wait before returning to work/school?
          </strong>
        </p>
        <p>
          Most patients can return to work or school within a few days to a
          week after cataract surgery. Consult with your eye surgeon for
          guidance.
        </p>
        <br />
        <p>
          <strong style={{ fontSize: '20px' }}>
            Will I need follow-up appointments?
          </strong>
        </p>
        <p>
          Follow-up appointments are essential to monitor your recovery and
          ensure your vision is improving as expected.
        </p>
        <br />
        <p>
          <strong style={{ fontSize: '20px' }}>
            Are there risks associated with cataract surgery?
          </strong>
        </p>
        <p>
          Cataract surgery is generally safe and has a high success rate. The
          risks are minimal when the procedure is performed by an experienced
          eye surgeon.
        </p>
      </div>
      <div className="consult-page">
        <h3>Consult a Doctor for Cataract Surgery</h3>
        <p>
          If you have questions or concerns about cataract surgery, it's crucial
          to consult an eye care professional. We can help you find the right
          eye surgeon to address your specific needs.
        </p>
        <p>Here are some common questions to ask your doctor:</p>
        <ul>
          <li>Is cataract surgery suitable for my condition?</li>
          <li>What are the potential risks and benefits of the procedure?</li>
          <li>What is the recovery process and expected outcomes?</li>
          <li>How can I prepare for the consultation and the procedure?</li>
          <li>Are there choices in the type of IOLs to be used?</li>
          <li>What follow-up care will be required?</li>
        </ul>
        <p>
          To schedule a consultation with an eye surgeon, please use our{' '}
          <strong>
            <Link to="/contact">contact page</Link>
          </strong>{' '}
          or reach out to our medical staff for additional information.
        </p>
      </div>
    </div>
  );
}

export default CataractSurgery;
