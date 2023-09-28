'use client'
import { menuLinks } from "@/constants/menu"
import { Box, Collapse, Container, Icon, Slide, Stack, useDisclosure } from "@chakra-ui/react"
import useScrollPosition from '@react-hook/window-scroll'
import { BiMenu } from "react-icons/bi"
import { Link } from "@chakra-ui/next-js"
import { usePathname } from "next/navigation"

interface NavigationMenuProps {
}

export const NavigationMenu: React.FC<NavigationMenuProps> = ({
}) => {
	let pathname = usePathname()
	let { href } = window.location
	let hrefRegex = /(#\w{0,})/gm
	let getHref = hrefRegex.exec(href)?.[0]
	let inHef = (id: string) => getHref === id
	let scrollY = useScrollPosition()
	// State ***************************************************************
	const { isOpen, onToggle } = useDisclosure()

	// Effect ***************************************************************


	// Effect ***************************************************************

	// Render
	return (
		<Stack zIndex={99}
			w={'full'} as={'menu'} py={'1.5'} position={'fixed'}
			px={[2, 4, 8]}
		>
			<Container
				zIndex={0}
				py={1} pos={'relative'}
				className={`
				`}
				as={'main'}
			>
				{/* Glass Morph */}
				<Box w={'full'} h={'full'}
					rounded={'md'}
					pos={'absolute'} top={0} left={0}
					className={`${(scrollY > 0 || isOpen)
						? 'transition-opacity opacity-1 delay-100 ease-in'
						: 'transition-opacity opacity-0 delay-200 ease-out'
						}
						shadow-sm backdrop-filter backdrop-blur-sm 
						bg-opacity-10`}
					bg={(scrollY > 0 || isOpen) ? 'whiteAlpha.700' : ''}
				>
				</Box>
				{/* Content */}
				<Stack flexDir={'row'}
					justifyContent={'space-between'}
					alignItems={'center'}
					position={'relative'}
				>
					{/* LogoType */}
					<Link
						href={'/'}
					>
						<Box
							bgImage={`url(/images/logo-bw.png)`}
							bgRepeat={'no-repeat'} bgPos={'center'}
							w={['14', '20']} minW={['14', '20']}
							h={['14', '20']} minH={['14', '20']}
							rounded={'full'}
							objectFit={'cover'}
							bgSize={[65, 95]}
						/>
					</Link>

					{/* Menu default*/}
					{pathname !== '/success' && <Stack
						display={['none', 'none', 'flex']}
						position={'relative'} mb={1}
						as={'ul'} flexDir={'row'} gap={5} className="links">
						{
							menuLinks.map((x, i) => (
								<Box key={i.toString()} as="li"
									position={'relative'}
									display={'flex'} justifyContent={'center'} >
									<Link href={x.href} className={
										`${scrollY > 0 ? '!text-black' : ''}`
									}>
										{x.name}
									</Link>
									{inHef(x.href) && <Box bg={scrollY > 0 && inHef(x.href)
										? 'black' : 'white'}
										position={'absolute'}
										bottom={-2.5}
										width={1.5} h={1.5} rounded={'full'}
									/>}
								</Box>
							))
						}
					</Stack>}
					{/* Menu mobile icon*/}
					<Icon
						display={['block', 'block', 'none']}
						boxSize={8} as={BiMenu}
						onClick={onToggle}
						fill={(scrollY > 0 || isOpen) ? 'black' : 'white'}
					/>
				</Stack>
			</Container >
			{
				<Collapse in={isOpen} animateOpacity
					className={`h-min`}
				>
					{/* Wrap Links Mobile */}
					< Stack
						className={`py-4`}
						w={'full'}
						h={'min'}
						// minH={'100px'}
						pos={'relative'}
					>
						{/* Glass */}
						<Box w={'full'} h={'full'}
							pos={'absolute'} top={0} left={0}
							zIndex={0}
							className={`
						shadow-sm backdrop-filter backdrop-blur-sm 
						bg-opacity-10`}
							bg={'whiteAlpha.700'}
							rounded={'md'}

						>
						</Box>
						{/* Glass - end */}
						{/* Links Mobile */}
						<Stack w={'full'} h={'full'} flexDir={'column'}
							justifyContent={'center'} gap={6}
						>
							{menuLinks.map((x, i) => (
								<Box key={i.toString()} as="li"
									position={'relative'}
									display={'flex'} justifyContent={'center'}
									flex={'row'} alignItems={'center'} gap={2}
								>
									<Link
										pos={'relative'} href={x.href} className={
											`${`${inHef(x.href) ? '' : '!text-black'}`
											}`
										}
										display={"flex"} alignItems={'center'}
									>
										{inHef(x.href) && <Box bg={'white'}
											width={1.5} h={1.5} rounded={'full'}
											pos={'absolute'} left={-5}
										/>}
										{x.name}
									</Link>
								</Box>
							))}
						</Stack>
						{/* Links Mobile - end*/}
					</Stack>
					{/* Wrap Links Mobile - end */}
				</Collapse>
			}
		</Stack >
	)
}