"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Printer, ArrowLeft } from "lucide-react"

export default function MembershipFormPage() {
  return (
    <>
      {/* Print controls - hidden when printing */}
      <div className="print:hidden bg-muted/40 border-b py-3 px-4">
        <div className="mx-auto max-w-3xl flex items-center justify-between">
          <Button asChild variant="ghost" size="sm">
            <Link href="/membership">
              <ArrowLeft className="size-4" />
              Back to Membership
            </Link>
          </Button>
          <Button size="sm" onClick={() => window.print()} className="font-heading uppercase tracking-wide">
            <Printer className="size-4" />
            Print / Save as PDF
          </Button>
        </div>
      </div>

      {/* Form - styled for print */}
      <div className="mx-auto max-w-3xl px-4 py-10 print:py-4 print:px-0">
        <style>{`
          @media print {
            @page { margin: 0.75in; size: letter; }
            .no-print { display: none !important; }
          }
        `}</style>

        {/* Header */}
        <div className="text-center mb-8 border-b-2 border-black pb-4">
          <h1 className="font-heading text-3xl font-bold uppercase tracking-widest">PMI Total Fitness</h1>
          <p className="text-sm mt-1">124 S. 2nd St. · Waterville, MN 56096</p>
          <p className="text-sm">Phone: (507) 362-4227 · Cell: (507) 362-8469</p>
          <p className="text-sm">pmi.totalfitness@hotmail.com</p>
          <h2 className="font-heading text-xl font-bold uppercase tracking-wide mt-4">Membership Registration Form</h2>
        </div>

        {/* Personal Info */}
        <div className="mb-6">
          <h3 className="font-heading font-bold uppercase tracking-wide text-sm border-b pb-1 mb-4">Personal Information</h3>
          <div className="grid grid-cols-2 gap-4">
            <FormField label="First Name" />
            <FormField label="Last Name" />
            <FormField label="Date of Birth" />
            <FormField label="Phone Number" />
            <div className="col-span-2">
              <FormField label="Address" />
            </div>
            <FormField label="City" />
            <FormField label="Zip Code" />
            <div className="col-span-2">
              <FormField label="Email Address" />
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mb-6">
          <h3 className="font-heading font-bold uppercase tracking-wide text-sm border-b pb-1 mb-4">Emergency Contact</h3>
          <div className="grid grid-cols-2 gap-4">
            <FormField label="Name" />
            <FormField label="Relationship" />
            <FormField label="Phone Number" />
          </div>
        </div>

        {/* Membership Type */}
        <div className="mb-6">
          <h3 className="font-heading font-bold uppercase tracking-wide text-sm border-b pb-1 mb-4">Membership Information</h3>
          <div className="space-y-2 text-sm">
            <p className="font-medium mb-3">Membership Start Date: <span className="inline-block border-b border-black w-40 ml-2"></span></p>
            <p className="text-xs text-gray-600 mb-3">
              Membership includes: initial personal training session, equipment instruction, unlimited aerobic equipment,
              weight machines, free weights, locker rooms, and one monthly guest pass. Plus discounted rates on Massage, Tanning, Yoga & Personal Training.
            </p>
          </div>
        </div>

        {/* Health History */}
        <div className="mb-6">
          <h3 className="font-heading font-bold uppercase tracking-wide text-sm border-b pb-1 mb-4">Health History</h3>
          <div className="space-y-3 text-sm">
            {[
              "Do you have any known heart conditions?",
              "Do you have high blood pressure?",
              "Do you have any joint or muscle conditions that could be aggravated by exercise?",
              "Are you currently pregnant?",
              "Are you currently under a physician&apos;s care for any condition?",
            ].map((q, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="flex-1" dangerouslySetInnerHTML={{ __html: q }} />
                <div className="flex gap-4 shrink-0">
                  <label className="flex items-center gap-1"><input type="checkbox" className="size-3" /> Yes</label>
                  <label className="flex items-center gap-1"><input type="checkbox" className="size-3" /> No</label>
                </div>
              </div>
            ))}
            <div className="mt-2">
              <p className="text-sm font-medium mb-1">If yes to any above, please explain:</p>
              <div className="border-b border-black w-full mt-4"></div>
              <div className="border-b border-black w-full mt-4"></div>
            </div>
          </div>
        </div>

        {/* Waiver */}
        <div className="mb-8">
          <h3 className="font-heading font-bold uppercase tracking-wide text-sm border-b pb-1 mb-4">Release & Waiver</h3>
          <p className="text-xs leading-relaxed text-gray-700 mb-4">
            I acknowledge that I am voluntarily participating in a fitness program and using the facilities at PMI Total Fitness.
            I understand that physical exercise involves risks. I agree to assume those risks and release PMI Total Fitness,
            its owners, employees, and agents from any and all liability for injury, illness, or damage that may result from my use
            of the facilities. I certify that I am in good physical condition and have no medical conditions that would prevent
            me from engaging in physical exercise, except as noted above. I have read and understand this release and sign it voluntarily.
          </p>
          <div className="grid grid-cols-2 gap-8 mt-6">
            <div>
              <div className="border-b border-black pb-1"></div>
              <p className="text-xs mt-1">Member Signature</p>
            </div>
            <div>
              <div className="border-b border-black pb-1"></div>
              <p className="text-xs mt-1">Date</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-6">
            <div>
              <div className="border-b border-black pb-1"></div>
              <p className="text-xs mt-1">Parent/Guardian Signature (if under 18)</p>
            </div>
            <div>
              <div className="border-b border-black pb-1"></div>
              <p className="text-xs mt-1">Date</p>
            </div>
          </div>
        </div>

        {/* Staff Use */}
        <div className="border-2 border-black p-4">
          <h3 className="font-heading font-bold uppercase tracking-wide text-sm mb-3">Staff Use Only</h3>
          <div className="grid grid-cols-3 gap-4 text-sm">
            <FormField label="Membership Type" />
            <FormField label="Start Date" />
            <FormField label="Staff Initials" />
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-xs text-gray-500 print:mt-4">
          <p>PMI Total Fitness · 124 S. 2nd St. · Waterville, MN 56096</p>
          <p>(507) 362-4227 · pmi.totalfitness@hotmail.com</p>
        </div>
      </div>
    </>
  )
}

function FormField({ label }: { label: string }) {
  return (
    <div>
      <label className="text-xs font-medium text-gray-600 block mb-1">{label}</label>
      <div className="border-b border-black h-7 w-full"></div>
    </div>
  )
}
