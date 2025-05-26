'use client';

import {
  IconArrowRight,
  IconCheck,
  IconClock,
  IconFileText,
  IconMessage,
  IconPhoneCall,
  IconUser,
} from '@tabler/icons-react';
import {
  Badge,
  Box,
  Button,
  Card,
  Center,
  Container,
  Divider,
  Group,
  List,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';

function HeroSection() {
  return (
    <Paper radius="md" p="xl" withBorder shadow="md" mt={40} mb={32}>
      <Stack align="center" gap="md">
        <Title order={1} ta="center">
          Automate the Work You Hate with <br />
          <Text
            inherit
            variant="gradient"
            component="span"
            gradient={{ from: 'pink', to: 'yellow' }}
          >
            Custom AI Agents
          </Text>
        </Title>
        <Text ta="center" size="lg" c="dimmed" maw={600}>
          I help SMBs automate repetitive tasks with tailor-made AI pipelines—voice, text, files,
          you name it.
        </Text>
        <Group mt="md">
          <Button size="md" radius="xl" color="pink" rightSection={<IconArrowRight size={18} />}>
            Book a Free Automation Audit
          </Button>
          <Button size="md" variant="outline" radius="xl" color="gray">
            See Examples
          </Button>
        </Group>
        <Group mt="lg" gap="xs">
          <ThemeIcon size="lg" color="blue" variant="light">
            <IconPhoneCall size={20} />
          </ThemeIcon>
          <ThemeIcon size="lg" color="teal" variant="light">
            <IconFileText size={20} />
          </ThemeIcon>
          <ThemeIcon size="lg" color="grape" variant="light">
            <IconMessage size={20} />
          </ThemeIcon>
          <IconArrowRight size={24} style={{ margin: '0 8px' }} />
          <ThemeIcon size="lg" color="yellow" variant="light">
            <IconClock size={20} />
          </ThemeIcon>
        </Group>
        <Text size="xs" c="dimmed" ta="center">
          Phone calls, invoices, Slack messages, Excel sheets → AI → Time saved
        </Text>
      </Stack>
    </Paper>
  );
}

function ProblemSection() {
  return (
    <Box my={48}>
      <Title order={2} ta="center" mb="md">
        Repetitive Tasks Are Costing You Time, Money, and Sanity
      </Title>
      <Center>
        <List
          spacing="sm"
          size="md"
          icon={
            <ThemeIcon color="red" size={20} radius="xl">
              <IconCheck size={14} />
            </ThemeIcon>
          }
        >
          <List.Item>Your team is wasting hours answering the same phone calls.</List.Item>
          <List.Item>Invoicing takes up time that should go to clients.</List.Item>
          <List.Item>
            You know automation is possible—but don't have the time or skills to do it.
          </List.Item>
        </List>
      </Center>
      <Text ta="center" mt="lg" size="lg" c="dimmed">
        You don't need a SaaS subscription. You need an AI that knows your business.
      </Text>
    </Box>
  );
}

function SolutionSection() {
  return (
    <Box my={48}>
      <Title order={2} ta="center" mb="md">
        Custom AI Agents for Your Business—Built by a Software Engineer, Not a Sales Team
      </Title>
      <Text ta="center" mb="lg" c="dimmed">
        <b>•</b> Each AI agent is tailored to your exact workflow
        <br />
        <b>•</b> Works with tools you already use (Slack, email, phone, Excel, PDFs, etc.)
        <br />
        <b>•</b> Built for precision, not generalization
      </Text>
      <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="lg">
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Group gap="xs">
            <ThemeIcon color="blue" size={32}>
              <IconPhoneCall size={20} />
            </ThemeIcon>
            <Text fw={500}>Voice AI</Text>
          </Group>
          <Text size="sm" mt="xs">
            24/7 call answering that escalates only when needed.
          </Text>
        </Card>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Group gap="xs">
            <ThemeIcon color="teal" size={32}>
              <IconFileText size={20} />
            </ThemeIcon>
            <Text fw={500}>Slack-to-Invoice</Text>
          </Group>
          <Text size="sm" mt="xs">
            One message → ready-to-send invoice PDF.
          </Text>
        </Card>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Group gap="xs">
            <ThemeIcon color="grape" size={32}>
              <IconMessage size={20} />
            </ThemeIcon>
            <Text fw={500}>Document AI</Text>
          </Group>
          <Text size="sm" mt="xs">
            Scans Excel files, extracts insights, updates CRM.
          </Text>
        </Card>
      </SimpleGrid>
    </Box>
  );
}

function HowItWorksSection() {
  return (
    <Box my={48}>
      <Title order={2} ta="center" mb="md">
        How It Works
      </Title>
      <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="lg" mb="md">
        <Card withBorder radius="md" p="lg">
          <Badge color="pink" variant="light" size="lg" mb="sm">
            Step 1
          </Badge>
          <Text fw={500}>We talk about the work that's bogging your team down</Text>
        </Card>
        <Card withBorder radius="md" p="lg">
          <Badge color="yellow" variant="light" size="lg" mb="sm">
            Step 2
          </Badge>
          <Text fw={500}>I design a custom AI pipeline to solve that workflow</Text>
        </Card>
        <Card withBorder radius="md" p="lg">
          <Badge color="teal" variant="light" size="lg" mb="sm">
            Step 3
          </Badge>
          <Text fw={500}>You get a fully-integrated, tested solution in days, not months</Text>
        </Card>
      </SimpleGrid>
      <Text ta="center" c="dimmed">
        Ongoing support & iteration included if needed.
      </Text>
    </Box>
  );
}

function SocialProofSection() {
  return (
    <Box my={48}>
      <Title order={2} ta="center" mb="md">
        What Clients Say
      </Title>
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
        <Card withBorder radius="md" p="lg">
          <Text size="sm">
            "Over 10 years in software engineering & AI consulting. Amor delivered exactly what we
            needed, fast."
          </Text>
          <Group mt="md" gap="xs">
            <ThemeIcon color="gray" size={24}>
              <IconUser size={16} />
            </ThemeIcon>
            <Text size="xs" c="dimmed">
              SMB Owner, Pilot Client
            </Text>
          </Group>
        </Card>
        <Card withBorder radius="md" p="lg">
          <Text size="sm">
            "Hands-on implementation, not outsourced dev shops. The AI agent fits our workflow
            perfectly."
          </Text>
          <Group mt="md" gap="xs">
            <ThemeIcon color="gray" size={24}>
              <IconUser size={16} />
            </ThemeIcon>
            <Text size="xs" c="dimmed">
              Operations Lead, Early User
            </Text>
          </Group>
        </Card>
      </SimpleGrid>
    </Box>
  );
}

function PricingSection() {
  return (
    <Box my={48}>
      <Title order={2} ta="center" mb="md">
        Simple Pricing. Big Returns.
      </Title>
      <Text ta="center" size="lg" c="dimmed" mb="sm">
        Flat project-based pricing. No hidden costs. No SaaS lock-in.
      </Text>
      <Text ta="center" size="md" c="dimmed">
        Most clients get ROI within 2 weeks of deployment.
      </Text>
    </Box>
  );
}

function FinalCTASection() {
  return (
    <Paper radius="md" p="xl" withBorder shadow="md" my={48}>
      <Stack align="center" gap="md">
        <Title order={2} ta="center">
          Ready to Stop Doing Repetitive Work?
        </Title>
        <Text ta="center" size="lg" c="dimmed">
          Let's automate your most annoying tasks. Book a free call.
        </Text>
        <Button size="md" radius="xl" color="pink" rightSection={<IconArrowRight size={18} />}>
          Book a Free Automation Audit
        </Button>
      </Stack>
    </Paper>
  );
}

export default function HomePage() {
  return (
    <Container size="xl" px="sm" pb="xl">
      <ColorSchemeToggle />
      <HeroSection />
      <Divider my={32} />
      <ProblemSection />
      <Divider my={32} />
      <SolutionSection />
      <Divider my={32} />
      <HowItWorksSection />
      <Divider my={32} />
      <SocialProofSection />
      <Divider my={32} />
      <PricingSection />
      <Divider my={32} />
      <FinalCTASection />
    </Container>
  );
}
