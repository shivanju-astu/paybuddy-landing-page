import React from "react"
import styled from "styled-components"

import { Section, Container } from "../global"

const Features = () => (
  <Section id="features">
    <StyledContainer>
      <Subtitle>Features</Subtitle>
      <SectionTitle>We understand what you need</SectionTitle>
      <FeaturesGrid>
        <FeatureItem>
          <FeatureTitle>Use Anywhere</FeatureTitle>
          <FeatureText>
            Scan a QR code or use your UPI id to pay from your credit.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Interest Free</FeatureTitle>
          <FeatureText>
            Pay 0% interest on every timely bill payment.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Improve Credit Score</FeatureTitle>
          <FeatureText>
            Start improving your credit score with us from the first bill payment.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Seamless Onboarding</FeatureTitle>
          <FeatureText>
            Fully digital account approval process. No paper work required.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Get Rewards</FeatureTitle>
          <FeatureText>
            Not just better credit score, get exciting rewards on each timely bill payment.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Automatic Budgeting</FeatureTitle>
          <FeatureText>
            Set up budgets for different categories and track them automatically with every purchase.
          </FeatureText>
        </FeatureItem>
      </FeaturesGrid>
    </StyledContainer>
  </Section>
)

export default Features

const StyledContainer = styled(Container)``

const SectionTitle = styled.h3`
  color: ${props => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  text-align: center;
`

const Subtitle = styled.h5`
  font-size: 16px;
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 12px;
  text-align: center;
`

const FeaturesGrid = styled.div`
  max-width: 670px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0px auto;
  grid-column-gap: 40px;
  grid-row-gap: 35px;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 64px;
  }
`

const FeatureItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const FeatureTitle = styled.h4`
  color: ${props => props.theme.color.primary};
  letter-spacing: 0px;
  line-height: 30px;
  margin-bottom: 10px;
`

const FeatureText = styled.p`
  text-align: center;
`
