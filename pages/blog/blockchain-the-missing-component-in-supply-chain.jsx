import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import blogImg5 from '../../public/images/blog5.jpg'
import blogImg4 from '../../public/images/blog4.png'
import blogImg3 from '../../public/images/blog3.png'
import BlogMainImg from '../../public/images/blog3.png'
import Link from 'next/link'
import Head from 'next/head'

export default function blog3() {
  return (
    <>
    <Head>
      <title> Blockchain in Supply Chain | SliceLedger </title>
      <meta name='description' content='SliceLedger can be used in supply chain to enhance trust, transparency and traceability throughout the process'/>
    </Head>
      <section className='blog_page1'>
        <div className="head">
          <Container>
            <Row>
              <Col lg={12}>
                <div className='head_box'>
                  <h2>Blockchain-The missing component in Supply Chain!</h2>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className='content_wrapper'>
          <Container>
            <Row>
              <Col lg={8}>
                <div className="blog_details">
                  <Image src={BlogMainImg.src} fluid alt='blog_image' />
                  <p>Blockchain technology has completely changed the way we do business.</p>

                  <p>The majority, if not all, of organizations, might see their productivity and profitability grow due to the incorporation of blockchain.</p>
                  <p>Companies nowadays must be adaptable, responsive, and innovative to survive. Taking the example of Supply Chain, the businesses that thrive are the ones that foster constant innovation across their Supply-Chain, and who stand out in a fiercely competitive market by continuing to be agile and pertinent. Fortunately, blockchain technology can facilitate process simplification.</p>

                  <h4>What is Supply Chain?</h4>
                  <p>A supply chain is the network of all the people, businesses, resources, tasks, and technological advancements involved in the manufacturing and distribution of a good. An entire supply chain, from the distribution of raw materials to the supplier and manufacturer to the final delivery to the customer, is included. A company builds a network of suppliers (or "links" in the chain") to transfer the product from raw material suppliers to organizations that deal with customers directly.</p>

                  <h4>How are the organizations linked in Supply Chain?</h4>
                  <p>The organizations in Supply Chain are linked through the physical and information flow of goods and services.</p>

                  <ol>
                    <li>Physical flow involves the movement and storage of raw materials and goods.</li>
                    <li>The information flow involves the interaction between parties involved in the chain to manage the day-to-day flow of goods and raw materials.</li>
                  </ol>

                  <h4>Challenges faced by Supply Chain Sector</h4>
                  <ol>
                    <li><b> Lack of Transparency </b>- This happens because organizations involved in the supply chain are still keeping their database confined to themselves. It has resulted in a communication gap within the chain because the database is shared if someone requests it.</li>
                    <li><b>Inadequate Traceability </b>- The inability to trace the products has become a severe problem for this sector. It makes it simpler for exploiters to replace "lookalike" fake goods with genuine articles.</li>
                    <li><b> Increased Costs</b> - Every team builds and maintains its own database, so they frequently invest time and money acquiring the same data repeatedly. The accompanying cost will significantly increase as a result.</li>
                    <li><b> Prolonged Quality Analysis </b>- Accurately identifying the moment at which quality is compromised is time-consuming and expensive. Additionally, a centralized structure exposes a company's processes to several dangers like fraud and code of conduct violations, emphasizing the critical need for robust risk management procedures in supply chain systems.</li>
                  </ol>

                  <h4>Blockchain as a Solution for Supply Chain</h4>
                  <p>Blockchain will allow companies to track all transactions more securely and transparently. It supports consensus, therefore there will be no disagreement over the transactions in the chain. Since every participant in the chain has access to the same version of the ledger, it has the unique ability to track ownership data. It will also help organizations trace the product from its source point to its end consumption. Every time the product/goods undergo a specific process, it will be documented. This documentation will reduce time delays, costs and human inefficiencies. Blockchain will also enhance the licensing process of services, goods and software.</p>

                  <h4>Summing Up</h4>
                  <p>Supply networks are becoming more intricate and challenging to maintain. There are issues because separate computer systems inside a company may not integrate, or different computer systems used by participants in a supply chain may not integrate. Blockchain Technology will help in addressing issues of complex supply chains. The use of blockchain network protocols will boost productivity, improve supply chain visibility, and finally stop errors and fraud.</p>

                </div>
              </Col>
              <Col lg={4}>
                <div className="recent_blogs_list">
                  <h4>Recent Blogs</h4>
                  <div className="blog_item">
                    <Image src={blogImg5.src} fluid />
                    <Link href={'/blog/layer1-vs-layer2-blockchain-network-protocols'}>Layer 1 vs Layer 2 Blockchain Network Protocols: Key Differences</Link>
                  </div>
                  <div className="blog_item">
                    <Image src={blogImg4.src} fluid />
                    <Link href={'/blog/blockchain-as-a-service'}>Blockchain Trends: Blockchain-as-a-Service</Link>
                  </div>
                  <div className="blog_item">
                    <Image src={blogImg3.src} fluid />
                    <Link href={'/blog/blockchain-the-missing-component-in-supply-chain'}>Blockchain-The missing component in Supply Chain!</Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </>
  )
}
