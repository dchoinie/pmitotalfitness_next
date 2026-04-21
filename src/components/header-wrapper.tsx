import { getNavItems } from "@/lib/queries"
import { Header } from "./header"

export async function HeaderWrapper() {
  const navLinks = await getNavItems()
  return <Header navLinks={navLinks} />
}
