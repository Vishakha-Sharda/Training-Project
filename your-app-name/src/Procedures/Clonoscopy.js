import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/clonoscopy.css'; // You can reuse the same CSS styles

function Colonoscopy() {
  return (
    <div>
      <div className="title5">
        <h1 className="title-content5">Colonoscopy</h1>
      </div>
      <div className="clonoscopy-content">
        <p style={{ fontSize: '25px', color: '' }}>
          <b>
            <i>
              Colonoscopy is a medical procedure that allows doctors to examine
              the inner lining of the large intestine (colon) and rectum for
              abnormalities or signs of disease.
            </i>
          </b>
        </p>
        <p>
          <strong style={{ fontSize: '20px' }}>What is a colonoscopy?</strong>
        </p>
        <p>
          Colonoscopy is a minimally invasive procedure that involves the use
          of a colonoscope, a flexible tube with a camera, to examine the colon
          and rectum. It is a valuable diagnostic tool for detecting conditions
          such as colorectal cancer, polyps, and inflammatory bowel disease.
        </p>
        <br />
        <p>
          <strong style={{ fontSize: '20px' }}>Why do I need a colonoscopy?</strong>
        </p>
        <ul>
          <li>
            To screen for colorectal cancer, particularly in individuals over a
            certain age.
          </li>
          <li>
            To investigate symptoms like rectal bleeding, changes in bowel
            habits, or unexplained abdominal pain.
          </li>
          <li>
            To identify and remove polyps that can develop into cancer over
            time.
          </li>
        </ul>
        <br />
        <p>
          <strong style={{ fontSize: '20px' }}>How does it work?</strong>
        </p>
        <ol>
          <li>
            A colonoscope is inserted through the rectum and advanced along the
            colon.
          </li>
          <li>
            The camera on the colonoscope provides real-time images, which are
            viewed on a monitor.
          </li>
          <li>
            The doctor carefully examines the colon's lining and may perform
            procedures like polyp removal or tissue biopsies.
          </li>
          <li>
            After the examination, the colonoscope is withdrawn, and the
            procedure is complete.
          </li>
        </ol>
        <br />
        <p>
          <strong style={{ fontSize: '20px' }}>
            Risks and complications include:
          </strong>
        </p>
        <ul>
          <li>
            Minor discomfort, bloating, or cramping during or after the
            procedure.
          </li>
          <li>Perforation (a rare but serious complication).</li>
          <li>Bleeding, infection, or adverse reactions to anesthesia.</li>
          <li>
            Residual sedation effects, so you should not drive immediately after
            the procedure.
          </li>
        </ul>
        <br />
        <p>
          <strong style={{ fontSize: '20px' }}>Recovery time:</strong>
        </p>
        <p>
          Most individuals can resume their regular activities shortly after a
          colonoscopy. You may experience mild bloating or cramping, but this
          should subside quickly.
        </p>
        <br />
        <p>
          <strong style={{ fontSize: '20px' }}>Cost:</strong>
        </p>
        <p>
          The cost of a colonoscopy can vary based on location, insurance
          coverage, and the need for any additional procedures. On average, it
          can range from $1,000 to $2,000.
        </p>
        <br />
        <p>
          <strong style={{ fontSize: '20px' }}>
            What else can I expect during my appointment?
          </strong>
        </p>
        <p>
          During your colonoscopy appointment, your doctor will explain the
          procedure, its purpose, and what you can expect. You may be asked
          questions about your medical history, current symptoms, and any
          allergies.
        </p>
        <br />
        <p>
          <strong style={{ fontSize: '20px' }}>
            Can I bring someone with me for support?
          </strong>
        </p>
        <p>
          It's often advisable to have a family member or friend accompany you
          for support during the procedure and transportation home, especially if
          you receive sedation.
        </p>
        <br />
        <p>
          <strong style={{ fontSize: '20px' }}>
            Is this a routine checkup?
          </strong>
        </p>
        <p>
          A colonoscopy can be a routine screening or a diagnostic procedure
          depending on your age, risk factors, and symptoms.
        </p>
        <br />
        <p>
          <strong style={{ fontSize: '20px' }}>
            Do I need to make any dietary restrictions?
          </strong>
        </p>
        <p>
          In preparation for a colonoscopy, your doctor will provide dietary
          instructions, typically involving a clear liquid diet the day before
          the procedure.
        </p>
        <br />
        <p>
          <strong style={{ fontSize: '20px' }}>
            How long do I need to wait before returning to work/school?
          </strong>
        </p>
        <p>
          Most individuals can return to work or school on the same day or the
          day after a colonoscopy, but this may vary based on individual
          preferences.
        </p>
        <br />
        <p>
          <strong style={{ fontSize: '20px' }}>
            Will I need follow-up appointments?
          </strong>
        </p>
        <p>
          Follow-up appointments may be recommended, especially if polyps were
          removed or further evaluation is needed.
        </p>
        <br />
        <p>
          <strong style={{ fontSize: '20px' }}>
            Are there risks associated with colonoscopy?
          </strong>
        </p>
        <p>
          While colonoscopy is generally safe, there are some risks and
          complications, which are minimized when the procedure is performed by
          experienced medical professionals.
        </p>
      </div>
      <div className="consult-page">
        <h3>Consult a Doctor for Colonoscopy</h3>
        <p>
          If you have questions or concerns about colonoscopy, it's essential to
          consult a medical professional. We're here to help you find the right
          doctor for your specific needs.
        </p>
        <p>Here are some common questions to ask your doctor:</p>
        <ul>
          <li>Is a colonoscopy suitable for my condition and age?</li>
          <li>What are the potential risks and benefits of the procedure?</li>
          <li>Are there alternative tests or treatments I should consider?</li>
          <li>What is the recovery process like, and how long does it take?</li>
          <li>What should I expect during and after the colonoscopy?</li>
          <li>Do I need to make specific dietary or lifestyle changes before the procedure?</li>
          <li>How can I prepare for the consultation and the colonoscopy?</li>
        </ul>
        <p>
          To consult a doctor, please use our{' '}
          <strong>
            <Link to="/contact">contact page</Link>
          </strong>{' '}
          to schedule an appointment or reach out to our medical staff for more
          information.
        </p>
      </div>
    </div>
  );
}

export default Colonoscopy;
