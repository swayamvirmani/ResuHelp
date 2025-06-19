import { Box, Grid, GridItem, Heading, LinkBox, LinkOverlay, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react'
import React from 'react'
import "./Home.css"

const Home = () => {
  return (
    <div className='maincontt'>
      <div className='homecont'>
        <div className='hero-section'>
          <Heading as='h1' size='4xl' className='main-heading'>
            ResuHelp
          </Heading>
          <Heading as='h2' size='lg' className='sub-heading' mt={8}>
            Our Services
          </Heading>
          
          <Grid templateColumns='repeat(2, 1fr)' gap={6} mt={10}>
            <GridItem>
              <LinkBox as='article' className='service-card analyse'>
                <Heading size='md' my={2}>
                  <LinkOverlay href='/analyse'>
                    Analyse your resume
                  </LinkOverlay>
                </Heading>
                <Text>
                  Analyse your resume and check your strengths, weaknesses and room of improvements
                </Text>
              </LinkBox>
            </GridItem>
            <GridItem>
              <LinkBox as='article' className='service-card compare'>
                <Heading size='md' my={2}>
                  <LinkOverlay href='/compare'>
                    Compare Two resumes
                  </LinkOverlay>
                </Heading>
                <Text>
                  Compare two resumes and find out which one is better, friendly rivalry is always better
                </Text>
              </LinkBox>
            </GridItem>
          </Grid>
        </div>

        {/* Key Features Section */}
        <div className='key-features-section' mt={12}>
          <Heading as='h2' size='lg' className='features-heading' mb={8}>
            Key Features
          </Heading>
          <Grid templateColumns='repeat(3, 1fr)' gap={6}>
            <Box className='feature-card' p={6}>
              <Text fontSize='3xl' mb={2}>📄</Text>
              <Heading size='md' mb={2}>Dual Resume Upload</Heading>
              <Text color='gray.300'>Upload and compare two resumes in a single step for seamless analysis</Text>
            </Box>
            <Box className='feature-card' p={6}>
              <Text fontSize='3xl' mb={2}>🧠</Text>
              <Heading size='md' mb={2}>AI-Powered Comparison</Heading>
              <Text color='gray.300'>Leverages Cohere's advanced LLM to analyze and contrast skills, strengths, and areas of improvement</Text>
            </Box>
            <Box className='feature-card' p={6}>
              <Text fontSize='3xl' mb={2}>📊</Text>
              <Heading size='md' mb={2}>Insightful Feedback</Heading>
              <Text color='gray.300'>Structured markdown output including detailed assessments, winner prediction, and tailored recommendations</Text>
            </Box>
            <Box className='feature-card' p={6}>
              <Text fontSize='3xl' mb={2}>🔍</Text>
              <Heading size='md' mb={2}>Skill Gap Detection</Heading>
              <Text color='gray.300'>Identifies differences in technical and soft skills between candidates</Text>
            </Box>
            <Box className='feature-card' p={6}>
              <Text fontSize='3xl' mb={2}>✅</Text>
              <Heading size='md' mb={2}>Smart Verdict Engine</Heading>
              <Text color='gray.300'>AI determines which resume is stronger and why—based on role fit, structure, and content</Text>
            </Box>
            <Box className='feature-card' p={6}>
              <Text fontSize='3xl' mb={2}>📈</Text>
              <Heading size='md' mb={2}>Improvement Suggestions</Heading>
              <Text color='gray.300'>Each resume receives actionable tips to boost effectiveness and clarity</Text>
            </Box>
          </Grid>
        </div>

        {/* FAQ Section */}
        <div className='faq-section' mt={12}>
          <Heading as='h2' size='lg' className='faq-heading' mb={8}>
            ❓ Frequently Asked Questions
          </Heading>
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex='1' textAlign='left'>1. What file formats are supported?</Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                We currently support PDF files only for both resumes. Make sure your files are not encrypted or password-protected.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex='1' textAlign='left'>2. How does the AI determine which resume is better?</Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                The AI compares both resumes based on factors like skills, structure, content clarity, and relevance to typical job profiles. It then provides a verdict with supporting reasons.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex='1' textAlign='left'>3. Is my data safe?</Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Yes. Your files are not stored permanently. They are deleted immediately after processing to ensure your data remains private and secure.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex='1' textAlign='left'>4. Can I analyze resumes in other formats like images or Word documents?</Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Currently, only PDF files are supported. However, support for .docx and image formats (with OCR) may be added in future updates.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex='1' textAlign='left'>5. What technology is used for the analysis?</Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                We use Cohere's Command-R large language model (LLM) to generate structured feedback by comparing the content of both resumes.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex='1' textAlign='left'>6. Is there a limit on resume length or size?</Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                We recommend keeping each resume under 5MB and under 2 pages for optimal processing speed and accuracy.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex='1' textAlign='left'>7. Can this tool be used for professional hiring?</Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Yes, while it's ideal for personal and educational use, it can also serve as a supplemental tool for recruiters and hiring managers during candidate screening.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  )
}

export default Home