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
          <FeatureTitle>No Awkward Reminders</FeatureTitle>
          <FeatureText>
            PayBuddy automates all your reminders for you. No need to ask to get paid back ever again.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Pay with UPI</FeatureTitle>
          <FeatureText>
            Pay your udhaari from inside the app. No need to settle through cash or aks UPI id.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Auto split Rent & Bills</FeatureTitle>
          <FeatureText>
            No need to request money for recurring expenses. Just setup your flat once and and pay only your share every month.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Personal Expenses</FeatureTitle>
          <FeatureText>
            Track your personal expenses along with your group payments. Get monthly reports of what you spent, you owe and you are owed.
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
