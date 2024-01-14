import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/knee.css'; // You can reuse the same CSS styles

function KneeReplacement() {
  return (
    <div>
      <div className="title6">
        <h1 className="title-content6">Knee Replacement</h1>
      </div>
      <div className="knee-content">
        <p style={{ fontSize: '25px', color: '' }}>
          <b>
            <i>
              Knee replacement, also known as knee arthroplasty, is a surgical
              procedure that involves the removal of damaged knee joint
              components and their replacement with artificial implants.
            </i>
          </b>
        </p>
        <p>
          <strong style={{ fontSize: '20px' }}>What is knee replacement?</strong>
        </p>
        <p>
          Knee replacement is a surgical procedure designed to alleviate pain
          and improve function in individuals with severe knee joint problems,
          typically due to osteoarthritis or injury. The procedure involves
          replacing the damaged joint surfaces with prosthetic components.
        </p>
        <br />
        <p>
          <strong style={{ fontSize: '20px' }}>Why do I need knee replacement?</strong>
        </p>
        <ul>
          <li>To relieve chronic knee pain and discomfort.</li>
          <li>
            To enhance mobility and quality of life affected by knee joint
            problems.
          </li>
          <li>
            To address conditions like osteoarthritis, rheumatoid arthritis, or
            post-traumatic arthritis.
          </li>
        </ul>
        <br />
        <p>
          <strong style={{ fontSize: '20px' }}>How does it work?</strong>
        </p>
        <ol>
          <li>
            The damaged portions of the knee joint, including bone and
            cartilage, are removed.
          </li>
          <li>
            The removed areas are replaced with prosthetic components made of
            metal and plastic.
          </li>
          <li>
            The artificial components replicate the natural movement of the
            knee joint, providing pain relief and improved mobility.
          </li>
          <li>The procedure is commonly performed under general anesthesia.</li>
          <li>
            Following surgery, patients undergo rehabilitation and physical
            therapy.
          </li>
        </ol>
        <br />
        <p>
          <strong style={{ fontSize: '20px' }}>
            Risks and complications include:{' '}
          </strong>
        </p>
        <ul>
          <li>Post-operative pain and swelling.</li>
          <li>Infection at the surgical site (rare).</li>
          <li>Implant-related issues, such as loosening or wear over time.</li>
          <li>Blood clots, deep vein thrombosis, or pulmonary embolism.</li>
        </ul>
        <br />
        <p>
          <strong style={{ fontSize: '20px' }}>Recovery time:</strong>
        </p>
        <p>
          The recovery period following knee replacement varies based on the
          individual, the extent of the procedure, and post-operative care.
          Physical therapy is a key component of rehabilitation.
        </p>
        <br />
        <p>
          <strong style={{ fontSize: '20px' }}>Cost:</strong>
        </p>
        <p>
          The cost of knee replacement can vary, including factors like the
          type of implant, geographical location, and insurance coverage. Costs
          typically range from $15,000 to $35,000 per knee.
        </p>
        <br />
        <p>
          <strong style={{ fontSize: '20px' }}>
            What else can I expect during my appointment?
          </strong>
        </p>
        <p>
          During your knee replacement appointment, your surgeon will discuss
          the procedure, assess your condition, and provide guidance on what to
          expect. Pre-operative tests may be performed, and your surgical plan
          will be outlined.
        </p>
        <br />
        <p>
          <strong style={{ fontSize: '20px' }}>
            Can I bring someone with me for support?
          </strong>
        </p>
        <p>
          It's advisable to have a family member or friend provide support and
          assist you before and after the knee replacement, especially during the
          recovery phase.
        </p>
        <br />
        <p>
          <strong style={{ fontSize: '20px' }}>Is this a routine procedure?</strong>
        </p>
        <p>
          Knee replacement is not considered a routine procedure but is
          recommended when specific knee joint conditions necessitate
          surgical intervention.
        </p>
        <br />
        <p>
          <strong style={{ fontSize: '20px' }}>
            Do I need to make any dietary restrictions?
          </strong>
        </p>
        <p>
          Your surgeon may provide dietary recommendations before the surgery.
          Follow their instructions regarding pre-operative preparation.
        </p>
        <br />
        <p>
          <strong style={{ fontSize: '20px' }}>
            How long before I can return to work/school?
          </strong>
        </p>
        <p>
          The timeline for returning to work or school after knee replacement
          varies based on your individual progress and the nature of your work or
          school activities. Your surgeon will offer guidance.
        </p>
        <br />
        <p>
          <strong style={{ fontSize: '20px' }}>
            Will I need follow-up appointments?
          </strong>
        </p>
        <p>
          After knee replacement, you'll typically have follow-up appointments to
          monitor your recovery and address any issues or concerns.
        </p>
        <br />
        <p>
          <strong style={{ fontSize: '20px' }}>
            Are there risks associated with knee replacement?
          </strong>
        </p>
        <p>
          Like any surgical procedure, knee replacement has potential risks.
          These are generally managed well when the surgery is performed by
          experienced orthopedic surgeons.
        </p>
      </div>
      <div className="consult-page">
        <h3>Consult a Doctor for Knee Replacement</h3>
        <p>
          If you have questions or concerns about knee replacement, it's vital to
          consult a medical professional. We can help you find the right doctor
          to address your specific needs.
        </p>
        <p>Here are some common questions to ask your doctor:</p>
        <ul>
          <li>Is knee replacement the appropriate treatment for me?</li>
          <li>What are the potential risks and benefits of the procedure?</li>
          <li>Are there alternative treatment options I should consider?</li>
          <li>What is the expected recovery process and duration?</li>
          <li>What should I expect during and after knee replacement?</li>
          <li>Do I need to adhere to specific dietary or lifestyle guidelines?</li>
          <li>How can I prepare for the consultation and potential procedure?</li>
        </ul>
        <p>
          To schedule an appointment with a doctor, please use our{' '}
          <strong>
            <Link to="/contact">contact page</Link>
          </strong>{' '}
          or reach out to our medical staff for further information.
        </p>
      </div>
    </div>
  );
}

export default KneeReplacement;
