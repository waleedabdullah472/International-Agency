// src/SocialMedia.jsx
import React from 'react';
import StrategyConsulting from '../components/SocialMedia/StrategyConsulting';
import ContentCreation from '../components/SocialMedia/ContentCreation';
import CommunityManagement from '../components/SocialMedia/CommunityManagement';
import PaidAdvertising from '../components/SocialMedia/PaidAdvertising';
import InfluencerMarketing from '../components/SocialMedia/InfluencerMarketing';
import AnalyticsReporting from '../components/SocialMedia/AnalyticsReporting';
import CrisisManagement from '../components/SocialMedia/CrisisManagement';
import PlatformAudits from '../components/SocialMedia/PlatformAudits';

const SocialMedia = () => (
  <div>
    <h1>Social Media Services 🚀</h1>
    <p>Explore the 8 key areas of our social media offerings:</p>

    <StrategyConsulting />
    <ContentCreation />
    <CommunityManagement />
    <PaidAdvertising />
    <InfluencerMarketing />
    <AnalyticsReporting />
    <CrisisManagement />
    <PlatformAudits />
  </div>
);

export default SocialMedia;