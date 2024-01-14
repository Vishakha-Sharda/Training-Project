// import React from 'react';
// import { Link } from 'react-router-dom'; // Import Link if you're using React Router
// import '../styles/endoscopy.css'; // Import your CSS file

// function Endoscopy() {
//   return (
//     <div className="endoscopy-page">
//       <h1>Endoscopy</h1>
//       <p>
//         Endoscopy is a medical procedure that allows doctors to examine and visualize the interior of
//         certain organs or areas of the body using an endoscope, a flexible tube with a light and camera.
//       </p>
//       <p><strong>What is an endoscopy?</strong></p>
//       <p>
//         An endoscopy is a minimally invasive procedure used for diagnostic and sometimes therapeutic purposes.
//         It provides real-time images of the inside of the body, helping doctors diagnose and treat various conditions.
//       </p>
//       <p><strong>Types of Endoscopy Procedures:</strong></p>
//       <ul>
//         <li>Gastrointestinal Endoscopy (GI Endoscopy) - Examines the digestive tract.</li>
//         <li>Colonoscopy - Views the large intestine (colon).</li>
//         <li>Bronchoscopy - Inspects the airways and lungs.</li>
//         <li>Cystoscopy - Examines the bladder and urinary tract.</li>
//         <li>Upper Endoscopy - Evaluates the esophagus, stomach, and upper small intestine.</li>
//         <li>Endoscopic Ultrasound (EUS) - Combines endoscopy with ultrasound for detailed imaging.</li>
//         <li>And more...</li>
//       </ul>
//       <p><strong>Why do I need an endoscopy?</strong></p>
//       <p>
//         Endoscopy can be recommended for various reasons, such as investigating unexplained symptoms, diagnosing
//         diseases or conditions, and guiding treatments like the removal of polyps, biopsies, or cancer staging.
//       </p>
//       <p><strong>How does it work?</strong></p>
//       <p>
//         During an endoscopy, a specialized endoscope is inserted into the body through natural openings like the
//         mouth, anus, or through small incisions. The camera on the endoscope captures images displayed on a monitor,
//         allowing the doctor to examine the affected area.
//       </p>
//       <p><strong>Risks and complications:</strong></p>
//       <ul>
//         <li>Risks are generally low, but there may be rare complications like bleeding or infection.</li>
//         <li>Complications can vary depending on the type of endoscopy and the individual's health.</li>
//         <li>Your doctor will discuss potential risks and benefits before the procedure.</li>
//       </ul>
//       <p><strong>Recovery time:</strong></p>
//       <p>
//         Most endoscopy procedures are outpatient, and patients can often return to normal activities shortly after.
//         However, you may need some time to recover from the effects of sedation or anesthesia.
//       </p>
//       <p>
//         If you're considering an endoscopy or have questions, it's essential to consult with a medical professional.
//         Please use our <Link to="/contact">contact page</Link> to schedule a consultation with one of our specialists.
//       </p>
//     </div>
//   );
// }

// export default Endoscopy;


import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/endoscopy.css';

function Endoscopy() {
  return (
    <div>
      <div className="title1">
        <h1 className="title-content1">Endoscopy</h1>
      </div>
      <div className="endoscopy-content1">
        <p style={{ fontSize: '25px', color: '' }}>
          <b>
            <i>
              Endoscopy is a minimally invasive medical procedure that uses an
              endoscope to visualize and examine the interior of certain organs
              and cavities in the body.
            </i>
          </b>
        </p>
        <p>
          <strong style={{ fontSize: '20px' }}>What is an endoscopy? </strong>
        </p>
        <p>
          Endoscopy is a medical procedure that allows doctors to examine the
          inside of the body using an endoscope—a flexible tube with a light and
          camera attached to it. The endoscope is inserted through an orifice or
          small incision to provide visuals of organs such as the digestive
          tract, respiratory system, or urinary system.
        </p>
        <p>
          Endoscopy serves various diagnostic and therapeutic purposes and
          helps doctors identify and treat conditions like ulcers, polyps,
          tumors, and inflammation.
        </p>
        <br />
        <p>
          <strong style={{ fontSize: '20px' }}>Why do I need an endoscopy? </strong>
        </p>
        <ul>
          <li>
            To investigate symptoms such as abdominal pain, difficulty
            swallowing, persistent cough, or gastrointestinal bleeding.
          </li>
          <li>
            To screen for diseases like colon cancer by performing a colonoscopy.
          </li>
          <li>
            To perform therapeutic procedures like removing polyps or taking
            tissue samples for biopsies.
          </li>
        </ul>
        <br />
        <p>
          <strong style={{ fontSize: '20px' }}>How does it work? </strong>
        </p>
        <ol>
          <li>
            The endoscope is inserted through a natural orifice (e.g.,
            mouth, anus) or a small incision.
          </li>
          <li>
            The endoscope provides live images that are transmitted to a
            monitor.
          </li>
          <li>
            The doctor navigates the endoscope through the organ or cavity and
            may perform procedures like biopsies or polyp removal.
          </li>
          <li>
            The procedure is recorded for documentation and review.
          </li>
          <li>
            Once the procedure is complete, the endoscope is removed.
          </li>
        </ol>
        <br />
        <p>
          <strong style={{ fontSize: '20px' }}>
            Risks and complications include:{' '}
          </strong>
        </p>
        <ul>
          <li>Minor bleeding or soreness at the procedure site.</li>
          <li>Infection, although it's rare.</li>
          <li>
            Perforation (tearing) of an organ or bleeding due to a biopsy.
          </li>
          <li>
            Adverse reactions to anesthesia or sedation if used during the
            procedure.
          </li>
        </ul>
        <br />
        <p>
          <strong style={{ fontSize: '20px' }}>Recovery time: </strong>
        </p>
        <p>
          The recovery time after an endoscopy varies depending on the specific
          procedure and your body's response. Most people can resume normal
          activities within a day or two, but it's essential to follow your
          doctor's post-procedure instructions.
        </p>
        <br />
        <p>
          <strong style={{ fontSize: '20px' }}>Cost: </strong>
        </p>
        <p>
          The cost of an endoscopy can vary based on factors like the type of
          procedure, location, and insurance coverage. It typically ranges from
          $800 to $2,500.
        </p>
        <br />
        <p>
          <strong style={{ fontSize: '20px' }}>
            What else can I expect during my appointment?{' '}
          </strong>
        </p>
        <p>
          During your endoscopy appointment, your doctor will explain the
          procedure, its purpose, and what you can expect. You may be asked
          questions about your medical history, symptoms, and any allergies. The
          doctor will perform the endoscopy and provide you with details
          regarding the findings.
        </p>
        <br />
        <p>
          <strong style={{ fontSize: '20px' }}>
            Can I bring someone with me for support?{' '}
          </strong>
        </p>
        <p>
          It's often a good idea to bring a family member or friend who can
          offer support and help you get home after the procedure, especially if
          you receive sedation or anesthesia.
        </p>
        <br />
        <p>
          <strong style={{ fontSize: '20px' }}>
            Is this a routine checkup?{' '}
          </strong>
        </p>
        <p>
          An endoscopy is typically not a routine checkup but is conducted when
          specific symptoms, conditions, or concerns warrant it.
        </p>
        <br />
        <p>
          <strong style={{ fontSize: '20px' }}>
            Do I need to make any dietary restrictions?{' '}
          </strong>
        </p>
        <p>
          Depending on the type of endoscopy, your doctor may provide dietary
          restrictions. Always follow your doctor's guidance regarding
          preparation for the procedure.
        </p>
        <br />
        <p>
          <strong style={{ fontSize: '20px' }}>
            How long do I need to wait before returning to work/school?{' '}
          </strong>
        </p>
        <p>
          Most people can return to work or school within a day or two after
          endoscopy. However, this may vary based on your specific procedure and
          your doctor's recommendations.
        </p>
        <br />
        <p>
          <strong style={{ fontSize: '20px' }}>
            Will I need follow-up appointments?{' '}
          </strong>
        </p>
        <p>
          Depending on your condition and the findings of the endoscopy, your
          doctor may recommend follow-up appointments for further evaluation or
          treatment.
        </p>
        <br />
        <p>
          <strong style={{ fontSize: '20px' }}>
            Are there risks associated with endoscopy?{' '}
          </strong>
        </p>
        <p>
          As with all medical procedures, endoscopy carries some risks, but when
          performed by experienced medical professionals, it is generally safe.
        </p>
      </div>
      <div className="consult-page">
        <h3>Consult a Doctor for Endoscopy</h3>
        <p>
          If you have questions or concerns about endoscopy, it's essential to
          consult a medical professional. We're here to help you find the right
          doctor to address your needs.
        </p>
        <p>Here are some common questions to ask your doctor:</p>
        <ul>
          <li>Am I a suitable candidate for an endoscopy?</li>
          <li>What are the potential risks and benefits of the procedure?</li>
          <li>Are there alternative treatment options I should consider?</li>
          <li>What is the recovery process like, and how long does it take?</li>
          <li>What should I expect during and after the endoscopy?</li>
          <li>Do I need to make any specific dietary or lifestyle changes?</li>
          <li>How can I prepare for the consultation and any potential procedure?</li>
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

export default Endoscopy;
